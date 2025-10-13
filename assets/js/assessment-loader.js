// Assessment JSON loader: fetches JSON by resource_id/json_path and renders questions
// Non-destructive: Only runs when metadata provides a resolvable JSON path or id

(function() {
  function getBaseUrl() {
    // Infer base URL from the script tag that loaded this file
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      const src = scripts[i].getAttribute('src') || '';
      if (src.endsWith('/assets/js/assessment-loader.js')) {
        // Strip trailing /assets/js/assessment-loader.js
        return src.replace(/\/assets\/js\/assessment-loader\.js$/, '');
      }
    }
    return '';
  }

  function log(...args) {
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
      console.log('[assessment-loader]', ...args);
    }
  }

  function derivePathFromResourceId(resourceId, courseAttr) {
    // Expect ids like: hphys-quiz-01-01
    if (!resourceId) return null;
    const parts = resourceId.split('-');
    if (parts.length < 2) return null;
    const course = parts[0] || courseAttr || 'hphys';
    const slug = parts.slice(1).join('-'); // e.g., quiz-01-01
    return `/${course}/assessments/${slug}.json`;
  }

  function makeQuestionHtml(q, index) {
    const requiredAttr = q.required === false ? 'false' : 'true';
    const points = q.points ? ` <span class="points">(${q.points})</span>` : '';
    const promptHtml = q.prompt || '';
    const idSafe = q.id || `q${index+1}`;
    const name = `q_${idSafe}`;
    const type = (q.type || 'short_answer').toLowerCase();

    let body = '';
    if (type === 'multiple_choice' && Array.isArray(q.options)) {
      body = q.options.map((opt, i) => {
        const val = typeof opt === 'string' ? opt : (opt.value ?? `opt${i}`);
        const label = typeof opt === 'string' ? opt : (opt.label ?? String(val));
        return `
          <label class="choice">
            <input type="radio" name="${name}" value="${escapeHtml(val)}" />
            <span>${escapeHtml(label)}</span>
          </label>`;
      }).join('\n');
    } else if (type === 'calculation') {
      body = `
        <div class="calc-inputs">
          <input type="text" name="${name}_work" placeholder="Show work here" />
          <input type="text" name="${name}_answer" placeholder="Final answer (with units)" />
        </div>`;
    } else if (type === 'free_response' || type === 'short_answer') {
      body = `<textarea name="${name}" rows="5" placeholder="Your response"></textarea>`;
    } else {
      // default
      body = `<textarea name="${name}" rows="4"></textarea>`;
    }

    return `
      <div class="question" data-required="${requiredAttr}">
        <div class="prompt"><span class="qnum">${index+1}.</span> ${promptHtml}${points}</div>
        <div class="response">${body}</div>
      </div>`;
  }

  function renderAssessment(container, data) {
    const headerBits = [];
    if (data.title) headerBits.push(`<h1>${escapeHtml(data.title)}</h1>`);
    const metaBits = [];
    if (data.time_limit) metaBits.push(`<span class="meta-item"><span class="meta-label">Time:</span> <span class="meta-value">${escapeHtml(String(data.time_limit))} min</span></span>`);
    if (data.points_possible) metaBits.push(`<span class="meta-item"><span class="meta-label">Points:</span> <span class="meta-value">${escapeHtml(String(data.points_possible))}</span></span>`);
    const metaHtml = metaBits.length ? `<div class="assessment-meta">${metaBits.join(' ')}</div>` : '';

    const questions = Array.isArray(data.questions) ? data.questions : [];
    let sectionsHtml = '';
    if (questions.length) {
      sectionsHtml += `<h2>Segment 1</h2>`;
      sectionsHtml += questions.map((q, i) => makeQuestionHtml(q, i)).join('\n');
    } else if (data.html) {
      // fallback: allow pre-rendered html payloads
      sectionsHtml = data.html;
    } else {
      sectionsHtml = `<p><em>No questions available.</em></p>`;
    }

    const html = `
      <div class="auto-generated-assessment">
        ${headerBits.join('\n')}
        ${metaHtml}
        ${sectionsHtml}
      </div>`;

    container.innerHTML = html;

    // If section system exists, (re)initialize after rendering
    if (typeof window.initializeSections === 'function') {
      try { window.initializeSections(); } catch (e) { console.warn('initializeSections failed:', e); }
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async function tryLoad() {
    const meta = document.getElementById('assessment-metadata');
    if (!meta) { log('no assessment-metadata found; skipping'); return; }

    // Skip JSON loading for YAML-based assessments
    const yamlBasedAttr = meta.getAttribute('data-yaml-based');
    log('data-yaml-based attribute value:', yamlBasedAttr, '(type:', typeof yamlBasedAttr + ')');
    const isYamlBased = yamlBasedAttr === 'true' || yamlBasedAttr === true;
    if (isYamlBased) {
      log('YAML-based assessment detected; skipping JSON fetch');
      return;
    }

    const resourceId = meta.getAttribute('data-resource-id') || '';
    const jsonPathHint = meta.getAttribute('data-json-path') || '';
    const course = meta.getAttribute('data-course') || '';
    if (!resourceId && !jsonPathHint) { log('no resource id or json path; skipping'); return; }

    const base = getBaseUrl();
    let relPath = null;
    if (jsonPathHint) {
      relPath = `/${jsonPathHint.replace(/(^\/|\.json$)/g, '')}.json`;
    } else {
      relPath = derivePathFromResourceId(resourceId, course);
    }
    if (!relPath) { log('unable to derive json path; skipping'); return; }

    const url = `${base}${relPath}`;
    log('Fetching assessment JSON:', url);
    try {
      let res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) {
        // Fallback to assets/data/<course>/assessments/<slug>.json
        const rid = resourceId || '';
        const coursePart = course || (rid.split('-')[0] || 'hphys');
        const slug = jsonPathHint ? jsonPathHint.split('/').pop() : (rid.split('-').slice(1).join('-'));
        const fallback = `${base}/assets/data/${coursePart}/assessments/${slug}.json`;
        log('Primary fetch failed; trying fallback:', fallback);
        res = await fetch(fallback, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      log('Loaded data id:', data.id);
      const container = document.getElementById('assessment-sections');
      if (container) {
        renderAssessment(container, data);
      } else {
        console.warn('#assessment-sections not found; cannot render');
      }
    } catch (err) {
      console.error('Failed to load assessment JSON:', err);
    }
  }

  document.addEventListener('DOMContentLoaded', tryLoad);
})();

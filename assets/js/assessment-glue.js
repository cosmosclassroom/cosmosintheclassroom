// assessment-glue.js
// Moves inline quiz glue logic out of the layout. Handles attempt IDs, answer collection,
// payload finalization, and submission interception for Google Apps Script endpoints.
(function () {
	'use strict';

	var meta = document.getElementById('assessment-metadata');
	var form = document.getElementById('assessment-form');
	if (!meta || !form) return;

	// Ensure attempt-id exists (stable per page load)
	if (!meta.dataset.attemptId) {
		try {
			meta.dataset.attemptId = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() :
				'attempt-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
		} catch (_) {
			meta.dataset.attemptId = 'attempt-' + Date.now();
		}
	}
	var attemptIdInput = document.getElementById('attempt-id');
	if (attemptIdInput) attemptIdInput.value = meta.dataset.attemptId;

	// Initialize StartTime if not set
	function isoNow() { return new Date().toISOString(); }
	var startHidden = document.getElementById('start-time-hidden');
	var startDisplay = document.getElementById('start-time');
	if (startHidden && !startHidden.value) startHidden.value = isoNow();
	if (startDisplay && !startDisplay.textContent) startDisplay.textContent = new Date(startHidden ? startHidden.value : Date.now()).toLocaleString();

	// Fill browser info and timestamp
	var browserInfo = document.getElementById('browser-info');
	if (browserInfo) browserInfo.value = navigator.userAgent;
	var ts = document.getElementById('timestamp');
	if (ts && !ts.value) ts.value = isoNow();

	function collectAnswers(root) {
		var questions = [];
		var qNodes = root.querySelectorAll('[data-question-id], fieldset, .question, [role="group"]');
		var pushIfAny = function(entry){ if (entry.answers.length) questions.push(entry); };

		if (qNodes.length) {
			var seen = new Set();
			qNodes.forEach(function (qEl) {
				if (seen.has(qEl)) return; seen.add(qEl);
				var qid = qEl.getAttribute('data-question-id') || qEl.id || qEl.getAttribute('name') || '';
				var entry = {
					id: String(qid || questions.length + 1),
					prompt: (qEl.querySelector('legend, .prompt, [data-prompt]') || {}).textContent || '',
					type: qEl.getAttribute && qEl.getAttribute('data-question-type') || '',
					answers: []
				};
				qEl.querySelectorAll('input, textarea, select').forEach(function (el) {
					var name = el.name || el.id || '';
					var tag = el.tagName;
					var t = (el.type || '').toLowerCase();
					if (tag === 'INPUT') {
						if (t === 'radio' || t === 'checkbox') {
							if (el.checked) entry.answers.push({ name: name, value: el.value });
						} else if (!['button','submit','reset','file'].includes(t)) {
							if (el.value != null && el.value !== '') entry.answers.push({ name: name, value: el.value });
						}
					} else if (tag === 'TEXTAREA') {
						if (el.value != null && el.value !== '') entry.answers.push({ name: name, value: el.value });
					} else if (tag === 'SELECT') {
						if (el.multiple) {
							Array.from(el.selectedOptions).forEach(function (opt) { entry.answers.push({ name: name, value: opt.value }); });
						} else if (el.value != null && el.value !== '') {
							entry.answers.push({ name: name, value: el.value });
						}
					}
				});
				pushIfAny(entry);
			});
			if (questions.length) return questions;
		}

		// Fallback: group all inputs inside #assessment-sections by name
		var container = root.getElementById('assessment-sections') || root;
		var byName = new Map();
		container.querySelectorAll('input, textarea, select').forEach(function (el) {
			var name = el.name || el.id; if (!name) return;
			var arr = byName.get(name) || []; byName.set(name, arr);
			var tag = el.tagName, t = (el.type || '').toLowerCase();
			if (tag === 'INPUT') {
				if (t === 'radio' || t === 'checkbox') {
					if (el.checked) arr.push(el.value);
				} else if (!['button','submit','reset','file'].includes(t)) {
					if (el.value != null && el.value !== '') arr.push(el.value);
				}
			} else if (tag === 'TEXTAREA') {
				if (el.value != null && el.value !== '') arr.push(el.value);
			} else if (tag === 'SELECT') {
				if (el.multiple) Array.from(el.selectedOptions).forEach(function (opt) { arr.push(opt.value); });
				else if (el.value != null && el.value !== '') arr.push(el.value);
			}
		});
		var idx = 1;
		byName.forEach(function (vals, name) {
			if (!vals.length) return;
			questions.push({ id: String(name || idx++), prompt: '', type: '', answers: vals.map(function(v){ return { name: name, value: v }; }) });
		});
		return questions;
	}

	function tryReadScore(root) {
		var scoreEl = root.querySelector('[data-score], .score, [aria-live][data-role="score"]');
		var maxEl = root.querySelector('[data-max-score], .max-score');
		var score = scoreEl ? parseFloat(scoreEl.getAttribute('data-score') || scoreEl.textContent) : null;
		var max = maxEl ? parseFloat(maxEl.getAttribute('data-max-score') || maxEl.textContent) : null;
		if (isFinite(score) || isFinite(max)) {
			return {
				score: isFinite(score) ? score : null,
				maxScore: isFinite(max) ? max : null
			};
		}
		return null;
	}

	function attachHidden(fieldName, value, formEl) {
		if (!formEl) return;
		var input = formEl.querySelector('input[name="' + fieldName + '"]');
		if (!input) {
			input = document.createElement('input');
			input.type = 'hidden';
			input.name = fieldName;
			formEl.appendChild(input);
		}
		input.value = value;
	}

	function finalizePayload() {
		var answers = collectAnswers(document);
		var scoreInfo = tryReadScore(document);

		// Dataset (for any other scripts)
		meta.dataset.answers = JSON.stringify(answers || []);
		if (scoreInfo) {
			if (scoreInfo.score != null) meta.dataset.score = String(scoreInfo.score);
			if (scoreInfo.maxScore != null) meta.dataset.maxScore = String(scoreInfo.maxScore);
		}
		meta.dataset.endAt = isoNow();
		meta.dataset.userAgent = navigator.userAgent;

		// Hidden fields for Google Sheets
		var answersField = document.getElementById('answers-json');
		if (answersField) answersField.value = meta.dataset.answers;

		var endField = document.getElementById('end-time');
		if (endField) endField.value = meta.dataset.endAt;

		if (attemptIdInput) attemptIdInput.value = meta.dataset.attemptId;

		// Ensure StartTime and Timestamp are set
		if (startHidden && !startHidden.value) startHidden.value = isoNow();
		if (ts && !ts.value) ts.value = isoNow();

		// Also mirror with conventional names if your Apps Script expects them
		attachHidden('score', meta.dataset.score || '', form);
		attachHidden('max_score', meta.dataset.maxScore || '', form);
	}

	// Early finalize on UI actions and custom events
	var submitBtn = document.getElementById('main-submit-btn') || document.getElementById('submit-btn');
	if (submitBtn) {
		submitBtn.addEventListener('click', function () {
			try { finalizePayload(); } catch (e) { /* no-op */ }
		}, { capture: true });
	}
	['assessment:submit','assessment:graded','quiz:submit','quiz:finalize'].forEach(function (evt) {
		document.addEventListener(evt, function(){ try { finalizePayload(); } catch(e){} }, { passive: true });
	});

	// Intercept fetch to ensure our fields are included when posting to Apps Script
	var origFetch = window.fetch;
	if (typeof origFetch === 'function') {
		window.fetch = function(input, init) {
			try {
				var url = (typeof input === 'string') ? input : (input && input.url) || '';
				var isAppsScript = /script\.google\.com|googleusercontent\.com\/exec/i.test(url);
				if (isAppsScript) {
					finalizePayload();
					var body = init && init.body;
					var ctype = init && init.headers && (init.headers['Content-Type'] || init.headers['content-type']);
					if (body instanceof FormData) {
						body.set('answers_json', meta.dataset.answers || '[]');
						body.set('AttemptId', meta.dataset.attemptId || '');
						body.set('EndTime', meta.dataset.endAt || '');
						if (meta.dataset.score) body.set('score', meta.dataset.score);
						if (meta.dataset.maxScore) body.set('max_score', meta.dataset.maxScore);
					} else if (body instanceof URLSearchParams) {
						body.set('answers_json', meta.dataset.answers || '[]');
						body.set('AttemptId', meta.dataset.attemptId || '');
						body.set('EndTime', meta.dataset.endAt || '');
						if (meta.dataset.score) body.set('score', meta.dataset.score);
						if (meta.dataset.maxScore) body.set('max_score', meta.dataset.maxScore);
					} else if (ctype && /application\/json/i.test(ctype) && typeof body === 'string') {
						try {
							var obj = JSON.parse(body);
							obj.answers_json = meta.dataset.answers || '[]';
							obj.AttemptId = meta.dataset.attemptId || '';
							obj.EndTime = meta.dataset.endAt || '';
							if (meta.dataset.score) obj.score = meta.dataset.score;
							if (meta.dataset.maxScore) obj.max_score = meta.dataset.maxScore;
							init.body = JSON.stringify(obj);
						} catch(_) {}
					}
				}
			} catch (_) {}
			return origFetch.call(this, input, init);
		};
	}

	// Intercept sendBeacon as a fallback
	if (navigator && typeof navigator.sendBeacon === 'function') {
		var origBeacon = navigator.sendBeacon.bind(navigator);
		navigator.sendBeacon = function(url, data) {
			try {
				if (/script\.google\.com|googleusercontent\.com\/exec/i.test(url)) {
					finalizePayload();
					var params = new URLSearchParams(data instanceof Blob ? '' : (data instanceof URLSearchParams ? data : ''));
					params.set('answers_json', meta.dataset.answers || '[]');
					params.set('AttemptId', meta.dataset.attemptId || '');
					params.set('EndTime', meta.dataset.endAt || '');
					return origBeacon(url, params);
				}
			} catch(_) {}
			return origBeacon(url, data);
		};
	}

	// Keep submit capture to run just before a native submission
	form.addEventListener('submit', function () {
		try { finalizePayload(); } catch (e) { /* no-op */ }
	}, true);
})();


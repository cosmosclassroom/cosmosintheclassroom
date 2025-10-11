(function(){
  if (typeof Reveal === 'undefined') return;
  Reveal.initialize({
    hash: true,
    slideNumber: true,
    controls: true,
    progress: true,
    transition: 'slide',
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX ],
    // Use MathJax 3 via CDN (Reveal Math plugin supports MathJax and KaTeX; we'll load MathJax 3 below)
    mathjax3: {
      mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
      loader: { load: ['[tex]/ams'] },
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      }
    }
  });
})();

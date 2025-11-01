document.addEventListener("DOMContentLoaded", function() {
  if (window.hljs && hljs.highlightAll) {
    hljs.highlightAll();
  }
  if (typeof Tabs !== 'undefined') {
    try {
      const tabs = new Tabs('.tabs');
      if (tabs && tabs.init) tabs.init();
    } catch (e) {
      console.debug('Tabs init skipped:', e);
    }
  }
});
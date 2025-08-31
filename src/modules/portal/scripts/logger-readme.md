Perfect 👍 you’ve got the logger script sitting in `/portal/scripts/universal-data-logger.js`.

Now to add functionality to *any other page* (say a chapter page, schedule page, or even your other course portals), you just need to do **two small things**:

---

### 1. **Include the logger script**

At the bottom of any HTML file you want tracked, add:

```html
<script src="/portal/scripts/universal-data-logger.js"></script>
```

*(Adjust the path if needed — if you’re in a deep folder, e.g. `/hphysics/flexbook/chapter1/`, you might need `../../portal/scripts/universal-data-logger.js`.)*

---

### 2. **Send events from the page**

Now, anywhere on the page (or inside an inline script), you can call the logger:

```html
<script>
  // Example: log when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    logEvent("page_load", {
      page: window.location.pathname
    });
  });

  // Example: log when a user clicks a button/link
  function trackClick() {
    logEvent("button_click", {
      page: window.location.pathname,
      buttonId: "start-lab-btn"
    });
  }
</script>

<button onclick="trackClick()">Start Lab</button>
```

---

### What this gives you

* Every page automatically reports **page loads** (if you set it up in `DOMContentLoaded`).
* You can sprinkle `logEvent("something_happened", {...})` wherever you want finer detail.
* All events go through `universal-data-logger.js`, so you don’t need to rewrite code on every page — just include it and call `logEvent(...)`.

---
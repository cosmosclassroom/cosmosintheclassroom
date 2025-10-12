// Assessment Error Handling
// Provides centralized error handling for the assessment system

// Global error handler to prevent complete failures
window.assessmentErrors = {
  errors: [],
  handlers: [],
  
  // Report an error to the console and store it
  report: function(source, error, context = {}) {
    const timestamp = new Date().toISOString();
    const errorInfo = {
      timestamp,
      source,
      message: error.message || error,
      stack: error.stack,
      context
    };
    
    console.error(`[Assessment Error] ${source}: ${error.message || error}`, context);
    this.errors.push(errorInfo);
    
    // Call any registered error handlers
    this.handlers.forEach(handler => {
      try {
        handler(errorInfo);
      } catch (handlerError) {
        console.error('Error in error handler:', handlerError);
      }
    });
    
    // Update UI indicator if it exists
    this.updateIndicator();
    
    return errorInfo;
  },
  
  // Register a handler for errors
  onError: function(handler) {
    if (typeof handler === 'function') {
      this.handlers.push(handler);
    }
  },
  
  // Create or update UI indicator
  updateIndicator: function() {
    const container = document.querySelector('.assessment-header, .assessment-form');
    if (!container) return;
    
    let indicator = document.getElementById('assessment-error-indicator');
    
    // Create indicator if it doesn't exist
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'assessment-error-indicator';
      indicator.style.cssText = `
        display: none;
        margin: 10px 0;
        padding: 8px 15px;
        background-color: #fff3cd;
        border: 1px solid #ffeeba;
        border-left: 4px solid #ffc107;
        color: #856404;
        border-radius: 4px;
        font-size: 14px;
      `;
      
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.cssText = `
        float: right;
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        padding: 0 5px;
      `;
      closeBtn.onclick = () => indicator.style.display = 'none';
      
      const title = document.createElement('strong');
      title.textContent = 'Assessment System Notice: ';
      
      const message = document.createElement('span');
      message.id = 'assessment-error-message';
      
      indicator.appendChild(closeBtn);
      indicator.appendChild(title);
      indicator.appendChild(message);
      
      // Details section (expandable)
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = 'Technical Details';
      summary.style.marginTop = '5px';
      summary.style.cursor = 'pointer';
      
      const detailsContent = document.createElement('pre');
      detailsContent.id = 'assessment-error-details';
      detailsContent.style.cssText = `
        margin-top: 5px;
        padding: 8px;
        background-color: rgba(0,0,0,0.05);
        border-radius: 3px;
        font-size: 12px;
        max-height: 150px;
        overflow-y: auto;
        white-space: pre-wrap;
      `;
      
      details.appendChild(summary);
      details.appendChild(detailsContent);
      indicator.appendChild(details);
      
      container.prepend(indicator);
    }
    
    // Update indicator content if there are errors
    if (this.errors.length > 0) {
      const latestError = this.errors[this.errors.length - 1];
      const messageEl = document.getElementById('assessment-error-message');
      const detailsEl = document.getElementById('assessment-error-details');
      
      if (messageEl) {
        messageEl.textContent = `${latestError.message} (${latestError.source})`;
      }
      
      if (detailsEl) {
        detailsEl.textContent = JSON.stringify(this.errors, null, 2);
      }
      
      indicator.style.display = 'block';
    }
  },
  
  // Clear all stored errors
  clear: function() {
    this.errors = [];
    const indicator = document.getElementById('assessment-error-indicator');
    if (indicator) {
      indicator.style.display = 'none';
    }
  }
};

// Wrap a function with error handling
window.withErrorHandling = function(fn, source) {
  return function() {
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      window.assessmentErrors.report(source, error, { 
        arguments: Array.from(arguments).map(arg => 
          typeof arg === 'object' ? 'Object' : arg
        )
      });
      return null;
    }
  };
};

// Add a global handler for unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
  window.assessmentErrors.report('UnhandledPromiseRejection', event.reason);
});

console.log('Assessment error handling system loaded');
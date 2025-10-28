class FormulaBlock extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import 'components/formula-block.css';
            </style>
            <div class="formula-block">
                <h3>Formula Editor</h3>
                <div class="form-group">
                    <label for="latex">Formula (LaTeX) <span class="mandatory-indicator">*</span></label>
                    <input type="text" id="latex" name="latex" required>
                </div>
                <div class="form-group">
                    <label for="variables">Variable Descriptions <span class="mandatory-indicator">*</span></label>
                    <textarea id="variables" name="variables" required></textarea>
                </div>
                <div class="form-group">
                    <label for="description">Formula Description <span class="mandatory-indicator">*</span></label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <button id="save-btn">Save Formula</button>
                <p id="error-message" class="error-message"></p>
            </div>
        `;

        this.saveButton = this.shadowRoot.querySelector('#save-btn');
        this.errorMessage = this.shadowRoot.querySelector('#error-message');
        this.requiredFields = ['latex', 'variables', 'description'];
    }

    connectedCallback() {
        this.saveButton.addEventListener('click', () => this.save());
        this.requiredFields.forEach(fieldId => {
            this.shadowRoot.querySelector(`#${fieldId}`).addEventListener('input', () => this.validate());
        });
        this.validate(); // Initial validation check
    }

    validate() {
        const isValid = this.requiredFields.every(id => this.shadowRoot.querySelector(`#${id}`).value.trim() !== '');
        this.saveButton.disabled = !isValid;
        this.errorMessage.textContent = isValid ? '' : 'All fields are required.';
        return isValid;
    }

    save() {
        if (!this.validate()) {
            return;
        }
        const formulaData = {
            latex: this.shadowRoot.querySelector('#latex').value,
            variables: this.shadowRoot.querySelector('#variables').value,
            description: this.shadowRoot.querySelector('#description').value,
        };

        this.dispatchEvent(new CustomEvent('save-formula', {
            detail: formulaData,
            bubbles: true,
            composed: true
        }));

        console.log('Saved Formula:', formulaData);
        alert('Formula saved successfully!');
    }
}

customElements.define('formula-block', FormulaBlock);

class NgssTaggingBlock extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import 'components/ngss-tagging-block.css';
            </style>
            <div class="ngss-tagging-block">
                <h3>NGSS Tagging</h3>
                <div class="tag-group">
                    <label for="dci">Disciplinary Core Ideas (DCI)</label>
                    <select id="dci" name="DCI" multiple></select>
                </div>
                <div class="tag-group">
                    <label for="practice">Science and Engineering Practices (Practice)</label>
                    <select id="practice" name="Practice" multiple></select>
                </div>
                <div class="tag-group">
                    <label for="ccc">Crosscutting Concepts (CCC) <span class="mandatory-indicator">*</span></label>
                    <select id="ccc" name="CCC" multiple required></select>
                </div>
                <button id="save-btn" disabled>Save Tags</button>
                <p id="error-message" class="error-message"></p>
            </div>
        `;

        this.cccSelect = this.shadowRoot.querySelector('#ccc');
        this.saveButton = this.shadowRoot.querySelector('#save-btn');
        this.errorMessage = this.shadowRoot.querySelector('#error-message');
    }

    connectedCallback() {
        this.populateDropdowns();
        this.cccSelect.addEventListener('change', () => this.validate());
        this.saveButton.addEventListener('click', () => this.save());
    }

    populateDropdowns() {
        // In a real application, these would be fetched from an API or a data file
        const ngssData = {
            DCI: ["PS1.A", "PS2.A", "PS3.A", "LS1.A", "ESS1.A"],
            Practice: ["Developing and Using Models", "Using Mathematics", "Constructing Explanations"],
            CCC: ["Patterns", "Cause and Effect", "Scale, Proportion, and Quantity", "Systems and System Models", "Energy and Matter", "Structure and Function", "Stability and Change"]
        };

        for (const key in ngssData) {
            const select = this.shadowRoot.querySelector(`[name="${key}"]`);
            ngssData[key].forEach(optionText => {
                const option = document.createElement('option');
                option.value = optionText;
                option.textContent = optionText;
                select.appendChild(option);
            });
        }
    }

    validate() {
        const isValid = this.cccSelect.selectedOptions.length > 0;
        this.saveButton.disabled = !isValid;
        this.errorMessage.textContent = isValid ? '' : 'At least one Crosscutting Concept (CCC) is required.';
        return isValid;
    }

    save() {
        if (!this.validate()) {
            return;
        }
        const selectedTags = {
            DCI: Array.from(this.shadowRoot.querySelector('#dci').selectedOptions).map(opt => opt.value),
            Practice: Array.from(this.shadowRoot.querySelector('#practice').selectedOptions).map(opt => opt.value),
            CCC: Array.from(this.cccSelect.selectedOptions).map(opt => opt.value)
        };

        // Dispatch an event with the saved data
        this.dispatchEvent(new CustomEvent('save-ngss', {
            detail: selectedTags,
            bubbles: true,
            composed: true
        }));

        console.log('Saved NGSS Tags:', selectedTags);
        alert('NGSS Tags saved successfully!');
    }
}

customElements.define('ngss-tagging-block', NgssTaggingBlock);

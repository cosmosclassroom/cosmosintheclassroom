import Sortable from 'sortablejs';

class FlexbookTemplateEnforcer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.phases = ["Forecast", "Blueprint", "Investigate", "Synthesize", "Reflect"];
        this.shadowRoot.innerHTML = `
            <style>
                @import 'components/flexbook-template-enforcer.css';
            </style>
            <div class="flexbook-enforcer">
                <h3>Flexbook Structure</h3>
                <div id="phase-container">
                    ${this.phases.map(phase => `
                        <div class="phase-block" data-phase="${phase}">
                            <div class="phase-header">${phase}</div>
                            <div class="content-area"></div>
                        </div>
                    `).join('')}
                </div>
                <div class="toolbox">
                    <h4>Toolbox</h4>
                    <div class="tool-item" draggable="true" data-type="reading">Reading Block</div>
                    <div class="tool-item" draggable="true" data-type="activity">Activity Block</div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const contentAreas = this.shadowRoot.querySelectorAll('.content-area');
        contentAreas.forEach(area => {
            new Sortable(area, {
                group: 'shared',
                animation: 150
            });
        });

        const toolbox = this.shadowRoot.querySelector('.toolbox');
        new Sortable(toolbox, {
            group: {
                name: 'shared',
                pull: 'clone',
                put: false
            },
            sort: false
        });
    }
}

customElements.define('flexbook-template-enforcer', FlexbookTemplateEnforcer);

import '@webcomponents/custom-elements/custom-elements.min.js';
import * as iconAttrs from '../../configs/iconAttributes.json';
import Figicons from '..';

const createSVG = (
    innerHTML: string,
    attrOverride: {
        size?: string;
    }
) => {
    const svg = document.createElementNS((iconAttrs as any).xmlns || 'http://www.w3.org/2000/svg', 'svg');

    Object.entries(iconAttrs).forEach(([prop, val]) => {
        console.log(attrOverride);
        let value = attrOverride[prop] || val.toString();

        if (attrOverride.size && ['width', 'height'].includes(prop)) {
            value = attrOverride.size;
        }

        svg.setAttribute(prop, value.toString());
    });

    svg.innerHTML = innerHTML;

    return svg.outerHTML;
};

export default class Figicon extends HTMLElement {
    constructor() {
        super();
    }

    public renderSVG() {
        const override: {
            size?: string;
        } = {};
        const name = this.getAttribute('name');

        if (name === null) return;

        const size = this.getAttribute('size');
        size && (override.size = size);

        this.innerHTML = createSVG(Figicons.icons[name].content, override);
    }

    public attributeChangedCallback() {
        this.renderSVG();
    }

    public connectedCallback() {
        this.renderSVG();
    }

    public get observedAttributes() {
        return ['type'];
    }
}

window.customElements.define('fig-icon', Figicon);

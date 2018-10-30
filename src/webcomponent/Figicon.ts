import '@webcomponents/custom-elements/custom-elements.min.js';
import * as figicons from '../../figicons.json';
import * as iconAttrs from '../iconAttributes.json';

const createSVG = (innerHTML: string) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    Object.entries(iconAttrs).forEach(([prop, val]) => svg.setAttribute(prop, val.toString()));
    svg.innerHTML = innerHTML;

    return svg.outerHTML;
};

export default class Figicon extends HTMLElement {
    constructor() {
        super();
    }

    public attributeChangedCallback() {
        const name = this.getAttribute('name');
        if (name === null) return;

        this.innerHTML = createSVG(figicons[name].content);
    }

    public connectedCallback() {
        const name = this.getAttribute('name');
        if (name === null) return;

        this.innerHTML = createSVG(figicons[name].content);
    }

    public get observedAttributes() {
        return ['type'];
    }
}

window.customElements.define('fig-icon', Figicon);

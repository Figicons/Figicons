"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@webcomponents/custom-elements/custom-elements.min.js");
const figicons = tslib_1.__importStar(require("../figicons.json"));
const iconAttrs = tslib_1.__importStar(require("../configs/iconAttributes.json"));
const createSVG = (innerHTML, attrOverride) => {
    const svg = document.createElementNS(iconAttrs.xmlns || 'http://www.w3.org/2000/svg', 'svg');
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
class Figicon extends HTMLElement {
    constructor() {
        super();
    }
    renderSVG() {
        const override = {};
        const name = this.getAttribute('name');
        if (name === null)
            return;
        const size = this.getAttribute('size');
        size && (override.size = size);
        this.innerHTML = createSVG(figicons[name].content, override);
    }
    attributeChangedCallback() {
        this.renderSVG();
    }
    connectedCallback() {
        this.renderSVG();
    }
    get observedAttributes() {
        return ['type'];
    }
}
exports.default = Figicon;
window.customElements.define('fig-icon', Figicon);

import * as figicons from '../figicons.json';
import * as iconConfig from './iconAttributes.json';

export default class Parse {
    public static do() {
        Object.values(figicons).forEach(icon => {
            const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const svg = $(s);
            Object.entries(iconConfig).forEach(([prop, val]) => {
                svg.attr(prop, val);
            });
            svg.html(icon.content);
            const e = $('<div class="svg"/>');
            e.append($(`<span class="icon">${svg[0].outerHTML}</span>`));
            e.append($(`<span class="desc">${icon.name}</span>`));
            $('.svgs').append(e);
        });
    }
}

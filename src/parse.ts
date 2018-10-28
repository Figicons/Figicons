import * as figicons from '../figicons.json';

export default class Parse {
    public static do() {
        Object.values(figicons).forEach(icon => {
            const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const svg = $(s);
            svg.attr('fill', 'none');
            svg.attr('viewBox', '0 0 24 24');
            svg.attr('height', 24);
            svg.attr('width', 24);
            svg.html(icon.content);
            const e = $('<div class="svg"/>').append(svg);
            $('.svgs').append(e);
        });
    }
}

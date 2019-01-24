import * as React from 'react';
import * as figicons from '../figicons.json';
import * as iconAttrs from '../configs/iconAttributes.json';
const camelCase = require('camelcase');

const svgAttrs = () =>
    Object.entries(iconAttrs).reduce((a, [prop, val]) => {
        const p = prop.includes('-') ? camelCase(prop) : prop;
        a[p] = val;
        return a;
    }, {});

const Figicon = ({ name, ...props }: { name: string; [index: string]: any }) => (
    <svg className="figicon" {...svgAttrs()} {...props} dangerouslySetInnerHTML={{ __html: figicons[name].content }} />
);

export default Figicon;

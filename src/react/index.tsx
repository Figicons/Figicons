import * as React from 'react';
import * as iconAttrs from '../../configs/iconAttributes.json';
import Figicons from '..';

const camelCase = require('camelcase');

const svgAttrs = () =>
    Object.entries(iconAttrs).reduce((a, [prop, val]) => {
        const p = prop.includes('-') ? camelCase(prop) : prop;
        a[p] = val;
        return a;
    }, {});

const Figicon = ({ name, ...props }: { name: string; [index: string]: any }) => (
    <svg className="figicon" {...svgAttrs()} {...props} dangerouslySetInnerHTML={{ __html: Figicons.icons[name].content }} />
);

export default Figicon;

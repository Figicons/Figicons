import * as React from 'react';
import * as figicons from '../../figicons.json';
import * as iconAttrs from '../iconAttributes.json';
const camelCase = require('camelcase');

interface Props {
    name: string;
}

const svgAttrs = () =>
    Object.entries(iconAttrs).reduce((a, [prop, val]) => {
        const p = prop.includes('-') ? camelCase(prop) : prop;
        a[p] = val;
        return a;
    }, {});

const Figicon = ({ name, ...props }: Props) => (
    <svg {...svgAttrs()} {...props} dangerouslySetInnerHTML={{ __html: figicons[name].content }} />
);

export default Figicon;

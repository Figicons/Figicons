import * as React from 'react';
import * as camelCase from 'camelcase';
import * as figicons from '../figicons.json';
import * as iconAttrs from '../configs/iconAttributes.json';

interface Props {
    name: string;
    [index: string]: any;
}

const svgAttrs = () =>
    Object.entries(iconAttrs).reduce((a, [prop, val]) => {
        const p = prop.includes('-') ? camelCase(prop) : prop;
        a[p] = val;
        return a;
    }, {});

const Figicon = ({ name, ...props }: Props) => (
    <svg className="figicon" {...svgAttrs()} {...props} dangerouslySetInnerHTML={{ __html: figicons[name].content }} />
);

export default Figicon;

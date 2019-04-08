import * as React from 'react';
import * as iconAttrs from './configs/iconAttributes.json';
import Preferences from './Preferences';

const camelCase = require('camelcase');

const svgAttrs = () =>
    Object.entries(iconAttrs).reduce((a, [prop, val]) => {
        const p = prop.includes('-') ? camelCase(prop) : prop;
        a[p] = val;
        return a;
    }, {});

const Icon = ({ name, ...props }: { name: string; [index: string]: any }) => (
    <svg className="figicon" {...svgAttrs()} {...props} dangerouslySetInnerHTML={{ __html: Preferences.icons[name].content }} />
);

export default Icon;

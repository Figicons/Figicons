import * as React from 'react';
import Preferences from './Preferences';
const camelCase = require('camelcase');

const svgAttrs = () =>
    Object.entries(Preferences.attributes).reduce((a, [prop, val]) => {
        const p = prop.includes('-') ? camelCase(prop) : prop;
        a[p] = val;
        return a;
    }, {});

const Icon = ({ name, className, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) => (
    <svg
        className={className ? `icon ${className}` : 'icon'}
        {...svgAttrs()}
        {...props}
        dangerouslySetInnerHTML={{ __html: Preferences.icons[name].content }}
    />
);

export default Icon;

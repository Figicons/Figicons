import * as React from 'react';
import { preferences } from './Preferences';
import camelCase from 'camelcase';

const svgAttrs = () =>
  Object.entries(preferences.attributes).reduce((a, [prop, val]) => {
    const p = prop.includes('-') ? camelCase(prop) : prop;
    a[p] = val;
    return a;
  }, {} as Record<string, string | number>);

interface Props extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export default function Icon({ name, className, ...props }: Props) {
  return (
    <svg
      className={className ? `icon ${className}` : 'icon'}
      {...svgAttrs()}
      {...props}
      dangerouslySetInnerHTML={{ __html: preferences.icons[name].content }}
    />
  );
}

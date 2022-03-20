import type { SVGAttributes } from 'react';

export type Attributes = Pick<
  SVGAttributes<HTMLOrSVGElement>,
  | 'xmlns'
  | 'viewBox'
  | 'fill'
  | 'height'
  | 'width'
  | 'stroke'
  | 'strokeWidth'
  | 'strokeLinecap'
  | 'strokeLinejoin'
>;

export interface IConfig {
  icons: {
    [index: string]: {
      height: number;
      width: number;
      content: string;
    };
  };
  attributes: Attributes;
}

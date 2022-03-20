import { IConfig } from './types/interfaces';

interface Preferences {
  icons: IConfig['icons'];
  attributes: IConfig['attributes'];
}

export const preferences: Preferences = {
  icons: {},
  attributes: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    height: 24,
    width: 24,
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
  },
};

export function setAttributes(attributes: Preferences['attributes']) {
  preferences.attributes = attributes;
}

export function setIcons(icons: Preferences['icons']) {
  preferences.icons = icons;
}

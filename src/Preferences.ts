import defaultIcons from '../figicons/figicons.json';
import iconAttrs from '../configs/iconAttributes.json';
import { IConfig } from '../types/interfaces';

export default class Preferences {
    public static config: IConfig;

    public static get icons(): IConfig['icons'] {
        return Preferences.config.icons;
    }

    public static get attributes(): IConfig['attributes'] {
        return Preferences.config.attributes;
    }

    public static setDefaultConfig() {
        Preferences.config = {
            icons: defaultIcons,
            attributes: iconAttrs,
        };
    }

    public static setCustomConfig(config: IConfig) {
        Preferences.config = config;
    }

    public static setIcons(icons: IConfig['icons']) {
        Preferences.config = {
            ...Preferences.config,
            icons,
        };
    }

    public static setAttributes(attributes: IConfig['attributes']) {
        Preferences.config = {
            ...Preferences.config,
            attributes,
        };
    }
}

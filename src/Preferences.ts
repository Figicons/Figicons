import * as iconSet from '../figicons/figicons.json';

interface IConfig {
    iconSet: {
        [index: string]: {
            name: string;
            file: string;
            content: string;
        };
    };
}

export default class Preferences {
    public static config: IConfig;
    public static get icons(): IConfig['iconSet'] {
        return Preferences.config.iconSet;
    }

    public static setDefaultConfig() {
        Preferences.config = {
            iconSet,
        };
    }

    public static setConfig(config: IConfig) {
        Preferences.config = config;
    }
}

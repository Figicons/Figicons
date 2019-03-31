interface IConfig {
    iconSet: {
        [index: string]: {
            name: string;
            file: string;
            content: string;
        };
    };
}

export default class Figicons {
    public static config: IConfig;
    public static get icons(): IConfig['iconSet'] {
        return Figicons.config.iconSet;
    }

    constructor(protected construct?: { config: IConfig }) {
        if (construct) {
            Figicons.setConfig(construct.config);
        } else {
            Figicons.setDefaultConfig();
        }
    }

    public static setDefaultConfig() {
        Figicons.config = {
            iconSet: require('../figicons.json'),
        };
    }

    public static setConfig(config: IConfig) {
        Figicons.config = config;
    }
}

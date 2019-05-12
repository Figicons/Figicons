export interface IConfig {
    icons: {
        [index: string]: {
            name: string;
            file: string;
            content: string;
        };
    };
    attributes: {
        xmlns: string;
        viewBox: string;
        fill: string;
        height: number;
        width: number;
        stroke: string;
        'stroke-width': number;
        'stroke-linejoin': string;
        'stroke-linecap': string;
    };
}

/// <reference types="react" />
interface Props {
    name: string;
    [index: string]: any;
}
declare const Figicon: ({ name, ...props }: Props) => JSX.Element;
export default Figicon;

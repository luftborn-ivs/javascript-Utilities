declare type Procedure = (...args: any[]) => any;
interface Debounce {
    (...args: any[]): any;
    clear: () => void;
    flush: () => void;
}
declare const debouncer: (func: Procedure, wait: number, immediate?: boolean) => Debounce;
export default debouncer;

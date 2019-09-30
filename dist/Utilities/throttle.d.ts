declare const debounce: (fn: any, ms?: number, immediate?: boolean) => (...args: any[]) => void;
declare const throttle: (func: any, ms: any) => () => void;
export { debounce, throttle, };

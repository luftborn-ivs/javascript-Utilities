export declare class ScriptLoader {
    callback: Function;
    script: string;
    constructor(script: string, callback: Function);
    load(): void;
}

export declare class ScrollPosition {
    element: HTMLElement | Window;
    constructor(element?: HTMLElement | Window);
    get(): {
        x: number;
        y: number;
    };
}

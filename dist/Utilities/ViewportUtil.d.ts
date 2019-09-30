export declare class ViewportUtil {
    private element?;
    constructor(element?: HTMLElement);
    IsVisible(): boolean;
    IsPartiallyVisible(): boolean;
    IsOffsetVisible(offset?: number): boolean;
    WindowTop(offset?: number): boolean;
}

export default class BrowserType {
    readonly userAgentString: string;
    readonly platformName: string;
    readonly browserName: string;
    readonly fullVersion: number;
    readonly majorVersion: number;
    private readonly nVer;
    private readonly nAgt;
    private nameOffset;
    private verOffset;
    private ix;
    constructor();
    isChrome(): boolean;
    isFirefox(): boolean;
    isEdge(): boolean;
    isOpera(): boolean;
    isIE(): boolean;
    isSafari(): boolean;
    iPhone(): boolean;
    isMobile(): boolean;
    iOSversion(): string;
    hasPlugin(name: string): boolean;
    isIframe(): boolean;
    is_touch_device(): boolean;
    useNativePdfViewer(): boolean;
}

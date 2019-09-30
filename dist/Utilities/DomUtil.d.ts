export default class DomUtil {
    private viewPortUtil;
    element: Element;
    constructor(element: Element);
    getDataAttr(attr: string, defaultvalue?: string): any;
    setDataAttr(attr: string, value: string): any;
    getAttr(attr: string, defaultvalue?: string): any;
    setAttr(attr: string, value: string): void;
    removeAttr(attr: string): void;
    removeDataAttr(attr: string): void;
    hasAttr(attr: string): boolean;
    shake(): void;
    error(): void;
    focus(): void;
    removeClass(classname: any): void;
    appendClass(classname: any): void;
    deleteElement(): void;
    setChildElementByAttrName(name: string, value: string): void;
    hasClass(className: string): boolean;
    getStyle(ruleName: string): any;
}

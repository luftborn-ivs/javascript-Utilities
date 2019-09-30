export default class HtmlLoader {
    targetElement: HTMLElement;
    constructor(element: string | HTMLElement);
    load(url: string, method?: string): void;
}

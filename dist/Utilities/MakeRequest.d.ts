export default class MakeRequest {
    method: string;
    url: string;
    headers: any;
    constructor(url: string, method?: string, headers?: any);
    private setHeaders;
    send(data?: any): Promise<{}>;
}

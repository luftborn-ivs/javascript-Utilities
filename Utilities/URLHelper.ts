
export default class UrlHelper {
    public static generateNew(params: { [key: string]: any }): string {
        const searchParams = new URLSearchParams();
        for (const key in params) {
            if (params.hasOwnProperty(key) && params[key]) {
                searchParams.set(key, params[key]);
            }
        }
        return searchParams.toString();
    }

    public setAndRedirect(params: { [key: string]: any }) {
        const searchParams = new URLSearchParams(window.location.search);
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                searchParams.set(key, params[key]);
            }
        }
        window.location.search = searchParams.toString();
    }

    public compose(params: { [key: string]: any }): string {
        const searchParams = new URLSearchParams(window.location.search);
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                searchParams.set(key, params[key]);
            }
        }
        return searchParams.toString();
    }


}

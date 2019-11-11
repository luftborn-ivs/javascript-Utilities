export default class CustomValidationUtil {
    private mailRegex: RegExp = new RegExp(
        /^([a-zA-Z0-9ÆØÅæøå_.+-])+\@(([a-zA-Z0-9ÆØÅæøå-])+\.)+([a-zA-Z0-9ÆØÅæøå]{2,4})+$/,
    );
    private urlRegex: RegExp = new RegExp(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    );
    private httpUrlRegex: RegExp = new RegExp(
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    );


	constructor() {}

    public validateEmail (mail: string): boolean {
        return this.mailRegex.test(mail);
    }

    public validateUrl (url: string): boolean {
        return this.urlRegex.test(url);
    }
    public validateHttpUrl (url: string): boolean {
        return this.httpUrlRegex.test(url);
    }

}

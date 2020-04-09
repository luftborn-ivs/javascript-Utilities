import ArrayUtil from "./ArrayUtil";

export default class HTMLImport {

    constructor() {

    }

    public execute() {
        this.includeHTML();
    }

    private includeHTML() {
        let elements: HTMLElement[], element: HTMLElement, filePath: string, xhttp: XMLHttpRequest;
        elements = ArrayUtil.FromNodeList(document.querySelectorAll("[html-import]")) as HTMLElement[];
        for (let i = 0; i < elements.length; i++) {
            element = elements[i];
            /*search for elements with a certain atrribute:*/
            filePath = element.getAttribute("html-import");
            if (filePath) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = () => {
                    if (xhttp.readyState == 4) {
                        if (xhttp.status == 200) {
                            element.insertAdjacentHTML("beforebegin", xhttp.responseText);
                            element.remove();
                        }
                        if (xhttp.status == 404) {
                            element.innerHTML = "Page not found.";
                        }
                        element.removeAttribute("html-import");
                        this.includeHTML();
                    }
                }
                xhttp.open("GET", filePath, true);
                xhttp.send();
                return;
            }
        }
    }
}
export default class HTMLImport {

    constructor() {

        this.includeHTML();
    }
    private includeHTML() {
        let elements, element, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        elements = document.querySelectorAll("[html-import]");
        for (let i = 0; i < elements.length; i++) {
            element = elements[i];
            /*search for elements with a certain atrribute:*/
            file = element.getAttribute("html-import");
            if (file) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = () => {
                    if (xhttp.readyState == 4) {
                        if (xhttp.status == 200) { element.innerHTML = xhttp.responseText; }
                        if (xhttp.status == 404) { element.innerHTML = "Page not found."; }
                        element.removeAttribute("html-import");
                        this.includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    }
}
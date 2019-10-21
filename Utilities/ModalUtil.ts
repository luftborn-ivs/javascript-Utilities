import ArrayUtil from "./ArrayUtil";
import DomUtil from "./DomUtil";

export default class ModalUtil {
    private Elements: Element[];
    private Modals: Modal[];
    private Triggers: Element[];
    public execute(): void {
        this.Elements = ArrayUtil.FromNodeList(
            document.querySelectorAll(".modal"),
        );

        document.querySelector('body').onclick = (event) => {
            const target = event.target as HTMLElement;
            if (target.hasAttribute("data-toggle") && target.getAttribute("data-toggle") === "modal") {
                const domUtil = new DomUtil(target);
                const targetSelector = domUtil.getDataAttr("target");
                const targetModal = document.querySelector(targetSelector);
                this.toggleModal(targetModal);
            }
        };


        this.Modals = this.Elements.map(
            modal => new Modal(modal as HTMLElement),
        );
    }
    private toggleModal(element: HTMLElement): void {
        const modal = new Modal(element);
        if (element.style.display === "block") {
            modal.hide();
        } else {
            modal.show();
        }
    }
}

// tslint:disable-next-line: max-classes-per-file
class Modal {
    public onhide: Event;
    private Modal: HTMLElement;
    backDrop: HTMLDivElement;
    constructor(element: HTMLElement) {
        this.Modal = element;
        this.bindClick();
        this.bindClose();
        this.bindSubmit();
        this.bindEscape();
        this.backDrop = document.createElement("div");
        this.backDrop.classList.add("modal-backdrop", "fade", "show");
        this.onhide = new Event('hide');
    }
    public show(): void {
        this.Modal.style.display = "block";
        this.Modal.classList.add("show");
        document.documentElement.append(this.backDrop);
    }
    public hide(): void {
        this.Modal.style.display = "none";
        this.Modal.classList.remove("show");
        this.Modal.dispatchEvent(this.onhide);
        let backdrop = document.querySelector(".modal-backdrop.fade.show");
        if (backdrop) {
            backdrop.remove();
        }
    }
    private bindClick(): void {
        this.Modal.onclick = (event: Event) => {
            if (event.target !== this.Modal) {
                return;
            } else {
                new Modal(this.Modal).hide();
            }
        };
    }
    private bindClose(): void {
        const dismiss : HTMLElement[] = ArrayUtil.FromNodeList(
            this.Modal.querySelectorAll("[data-dismiss]"),
        );
        dismiss.forEach(element => {
            element.onclick = this.hide.bind(this);
        });
    }
    private bindSubmit(): void {
        const submit : HTMLElement[] = ArrayUtil.FromNodeList(
            this.Modal.querySelectorAll("[data-submit]"),
        );
        submit.forEach(element => {
            const domUtil = new DomUtil(element);
            const value = domUtil.getDataAttr("submit-value");
            const targetSelector = domUtil.getDataAttr("submit");
            element.onclick = () => {
                this.hide();
                document.querySelector(targetSelector).scrollIntoView();
                const positionInput = document.getElementById("position") as HTMLFormElement;
                positionInput.value = value;
            };
        });
    }
    private bindEscape(): void {
        document.onkeydown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                this.hide();
            }
        };
    }
}

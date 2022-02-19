class modalCom extends HTMLElement {
    constructor() {
        super();

    }



    connectedCallback() {
        this.template = `
              <div class="modal">
                <div class="modal__body ">
                    <h2 class="modal__title">Pais</h2>
                    <div class="modal__paragraph">
                       <p class="section__continent"></p>
                    </div>
                    <a href="#" onclick="closeModal()" class="modal__close">Cerrar</a>
                </div>
            </div>        
        `
        this.innerHTML = this.template;

    }
}

window.customElements.define("cmp-modal", modalCom)

class modalCom extends HTMLElement {
    constructor() {
        super();
        this.flagPais;
        this.namePais;
        this.capitalPais;
        this.poblacionPais;
    }

    static get observedAttributes() {
        return ['flagpais', 'namepais', 'capitalpais', 'regionpais', 'subregionpais', 'poblacionpais']
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "titlemodal":
                this.flagPais = newValue;
                break;
            case "bodymodal":
                this.namePais = newValue;
                break;

        }

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

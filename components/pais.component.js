
class elementPais extends HTMLElement {

    constructor() {
        super();
        this.flagPais;
        this.namePais;
        this.capitalPais;
        this.poblacionPais;
        this.continentPais;
    }

    static get observedAttributes() {
        return ['flagpais', 'namepais', 'capitalpais', 'regionpais', 'subregionpais', 'poblacionpais', 'continentpais']
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "flagpais":
                this.flagPais = newValue;
                break;
            case "namepais":
                this.namePais = newValue;
                break;
            case "capitalpais":
                this.capitalPais = newValue;
                break;
            case "regionpais":
                this.regionPais = newValue;
                break;
            case "subregionpais":
                this.subregionPais = newValue;
                break;
            case "poblacionpais":
                this.poblacionPais = newValue;
                break;
            case "continentpais":
                this.continentPais = newValue;
                break;
        }

    }

    connectedCallback() {
        this.template = `
            <div  class="card open__modal">
                <div onclick="openModal('${this.namePais}', '${this.continentPais}')" class="title">
                    <img class="imgFlag " src="${this.flagPais}" />
                    <h1 >${this.namePais}<h1>
                </div>
                <div class="body">
                <ul>
                    <li>Capital: ${this.capitalPais}</li>
                    <li>Region: ${this.regionPais}</li>
                    <li>Sub-Region: ${this.subregionPais}</li>
                    <li>Población: ${this.poblacionPais}</li>

                </ul>
                </div>
                <div class="actions">
                <div>
            </div>

        
        `
        this.innerHTML = this.template;

    }

}


window.customElements.define("cmp-list-pais", elementPais)

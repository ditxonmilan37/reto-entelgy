class cardPais extends HTMLElement {
    constructor() {
        super();

    }

    async connectedCallback() {
        const paises = await this.getPaises();
        this.template = `<div class="grid">
           
                    ${this.createViewGridCard(paises)}
           
           </div>
        `
        this.innerHTML = this.template;

    }

    createViewGridCard = (paises) => {
        let cardPaises;
        cardPaises = paises.map(item => (
            this.constructComponent(item)
        ))
        return cardPaises.join('');

    }

    constructComponent = (paises) => {
        return ` <cmp-list-pais
                    flagpais = "${paises.flags.svg}"
                    namepais = "${paises.name.nativeName.spa.common}"
                    capitalpais = "${paises.capital}"
                    regionpais = "${paises.region}"
                    subregionpais = "${paises.subregion}"
                    poblacionpais = "${paises.population}"
                    continentpais = "${paises.region}"
            ></cmp-list-pais>`
    }

    getPaises = async () => {

        let response = await fetch('https://restcountries.com/v3.1/lang/spa', {
            method: "GET",
            headers: {
                "Content-Type": "text/plain"
            },
        })
        let json = await response.json()

        return json.slice(0, 12)

    }
}

window.customElements.define("card-list-pais", cardPais)

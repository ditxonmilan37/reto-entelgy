
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const sectionContinent = document.querySelector('.section__continent');


function openModal(namePais, continentPais) {
    modalTitle.innerHTML = namePais;
    sectionContinent.innerHTML = `Continente: ${continentPais}`;
    modal.classList.add('modal--show')
}

function closeModal() {
    modal.classList.remove('modal--show')
}
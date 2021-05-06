// MODAL ATIVATION 
const Modal = {
  open() {
    document.querySelector('.modal-background')
    .classList.add('activated');
  },

  close() {
    document.querySelector('.modal-background')
    .classList.remove('activated');
  }
}

const transactions = [{
  "name": "Yuji Itadori",
  "phone": "88988888888",
  "email": "yujiitadori@mail.com",
  "github": "https://github.com/eliasinacio",
  "instagram": "https://instagram.com/eu_liaaas",
  "twitter": "https://twitter.com/eliasinacio_1",
  "linkedin": "https://linkedin.com/in/eliasinacio0/"
},
{
  "name": "Nobara",
  "phone": "77823456378",
  "email": "nobarakugisaki@mail.com",
  "github": "https://github.com/eliasinacio",
  "instagram": "https://instagram.com/eu_liaaas",
  "twitter": "https://twitter.com/eliasinacio_1",
  "linkedin": "https://linkedin.com/in/eliasinacio0/"
}]

// tentativa de receber os dados do Local Storage e adicionar ao html :/
// LOCALSTORAGE

localStorage.setItem("contacts", JSON.stringify(transactions));

const newContactCard = document.createElement('div');
newContactCard.classList.add('contact-card');
document.querySelector(".contacts").appendChild(newContactCard);
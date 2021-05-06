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

// GET AND SET STORAGE ITEMS
const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("contacts"))
  },
  set(contact) {
    localStorage.setItem("contacts", JSON.stringify(contact))
  }
}

const Contacts = {
  all: Storage.get()
}


// const contacts = [
//   {
//   "icon": "https://i.pinimg.com/originals/b2/5a/ec/b25aecc9ecc908ec35e3f0385eb9d60a.jpg",
//   "name": "Yuji Itadori",
//   "phone": "099393837298",
//   "email": "yujiitadorigojo@mail.com",
//   "github": "https://github.com/eliasinacio",
//   "instagram": "https://instagram.com/eu_liaaas",
//   "twitter": "https://twitter.com/eliasinacio_1",
//   "linkedin": "https://linkedin.com/in/eliasinacio0/"
//   },{
//   "icon": "https://i.pinimg.com/originals/ee/49/54/ee4954e867697ab3ced9ff6f5842a7f9.jpg",
//   "name": "Nobara Kugisaki",
//   "phone": "77823456378",
//   "email": "nobarakugisaki@mail.com",
//   "github": "https://github.com/eliasinacio",
//   "instagram": "https://instagram.com/eu_liaaas",
//   "twitter": "https://twitter.com/eliasinacio_1",
//   "linkedin": "https://linkedin.com/in/eliasinacio0/"
//   },{
//   "icon": "https://i.pinimg.com/originals/12/ae/ba/12aeba8e7736cacd19fa7299a8ebb8a9.jpg",
//   "name": "Fushiguro Megumi",
//   "phone": "556637829",
//   "email": "mmegumifushiguro00@mail.com",
//   "github": "https://github.com/eliasinacio",
//   "instagram": "https://instagram.com/eu_liaaas",
//   "twitter": "https://twitter.com/eliasinacio_1",
//   "linkedin": "https://linkedin.com/in/eliasinacio0/"
// }]

// localStorage.setItem("contacts", JSON.stringify(contacts));

Contacts.all.forEach( (contact) => {
  const card = document.createElement('div')
  card.innerHTML = `
  <div class="contact-card">
    <img class="contact-icon" src="${contact.icon}"/>

    <div class="contact-data">
      <h2 class="contact-name">${contact.name}</h2>
      <p class="contact-num">${contact.phone}</p>
      <p class="contact-email">${contact.email}</p>
      
      <div class="contact-links">
        <a id="github" href="${contact.github}" target="_blank"><img src="https://img.icons8.com/material-sharp/48/ffffff/github.png"/></a>
        <a id="instagram" href="${contact.instagram}" target="_blank"><img src="https://img.icons8.com/fluent-systems-regular/48/ffffff/instagram-new.png"/></a>
        <a  id="twitter" href="${contact.twitter}" target="_blank"><img src="https://img.icons8.com/android/48/ffffff/twitter.png"/></a>
        <a id="linkedin" href="${contact.linkedin}" target="_blank"><img src="https://img.icons8.com/fluent-systems-filled/48/ffffff/linkedin.png"/></a>
      </div>
    </div>
  </div> 
  `
  document.querySelector('.contacts').appendChild(card);
});
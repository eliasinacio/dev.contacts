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

const contacts = {
  all: Storage.get()
}


// const contacts = [
//   {
//     "icon": "https://i.pinimg.com/originals/b2/5a/ec/b25aecc9ecc908ec35e3f0385eb9d60a.jpg",
//     "name": "Yuji Itadori",
//     "phone": "099393837298",
//     "email": "yujiitadorigojo@mail.com"
//   },{
//     "icon": "https://i.pinimg.com/originals/ee/49/54/ee4954e867697ab3ced9ff6f5842a7f9.jpg",
//     "name": "Nobara Kugisaki",
//     "phone": "77823456378",
//     "email": "nobarakugisaki@mail.com"
//   },{
//     "icon": "https://i.pinimg.com/originals/12/ae/ba/12aeba8e7736cacd19fa7299a8ebb8a9.jpg",
//     "name": "Fushiguro Megumi",
//     "phone": "556637829",
//     "email": "mmegumifushiguro00@mail.com"
//   }]
// localStorage.setItem("contacts", JSON.stringify(contacts));

contacts.all.forEach( (contact) => {
  const card = document.createElement('div')
  card.innerHTML = `
  <li class="contact-card">
    <img class="contact-icon" src="${contact.icon}"/>

    <div class="contact-data">
      <h2 class="contact-name">${contact.name}</h2>
      <p class="contact-num">${contact.phone}</p>
      <p class="contact-email">${contact.email}</p>
    </div>
  </li> 
  `
  document.querySelector('.contacts').appendChild(card);
});



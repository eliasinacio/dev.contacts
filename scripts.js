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


// GET VALUES
function getValues() {
  console.log("submeteu")
}
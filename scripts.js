// MODAL ATIVATION 
const Modal = {
  open() {
    document.querySelector('.modal-background')
    .classList.add('activated');
  },

  close() {
    document.querySelector('.modal-background')
    .classList.remove('activated');
    
    // Apaga os valores ao cancelar
    Form.name.value = "";
    Form.icon.value = "";
    Form.phone.value = "";
    Form.email.value = "";
  }
}

// GET AND SET STORAGE ITEMS
const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("contacts")) || []
  },
  set(contact) {
    localStorage.setItem("contacts", JSON.stringify(contact))
  }
}

const contacts = {
  all: Storage.get(),

  addContact(contact) {
    contacts.all.push(contact)
  }
}

contacts.all.forEach( (contact) => {
  const card = document.createElement('div')
  card.innerHTML = `
  <li class="contact-card">
    <img class="contact-icon" src="${contact.icon}"/>
    <span>${contact.name[0]}</span>

    <div class="contact-data">
      <h2 class="contact-name">${contact.name}</h2>
      <p class="contact-num">${contact.phone}</p>
      <p class="contact-email">${contact.email}</p>
    </div>
  </li> 
  `
  if (contact.icon == "") {
    card.querySelector('span').style.zIndex = 1;
  }

  document.querySelector('.contacts').appendChild(card);
});

const Form = {
  name: document.querySelector('#input-name'),
  icon: document.querySelector('#input-icon'),
  phone: document.querySelector('#input-phone'),
  email: document.querySelector('#input-email'),

  getValues() {
    return {
      name: Form.name.value,
      icon: Form.icon.value,
      phone: Form.phone.value,
      email: Form.email.value
    }
  },

  submit(event) {
    const values = Form.getValues()
    contacts.addContact(values);
    Storage.set(contacts.all)
  }
}
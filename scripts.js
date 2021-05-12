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
  const card = document.createElement('li');

  card.id = `c${contacts.all.indexOf(contact)}`;
  card.classList.add('contact-card');
  
  card.innerHTML = `
    <img class="contact-icon" src="${contact.icon}"/>
    <span>${contact.name[0]}</span>

    <div class="contact-data">
      <h2 class="contact-name">${contact.name}</h2>
      <p class="contact-num">${contact.phone}</p>
      <p class="contact-email">${contact.email}</p>
    </div>

    <div class="card-buttons">
      <a class="deleteBtn" href="#">
        <img src="https://img.icons8.com/material-sharp/24/ffffff/trash.png"/>
      </a>
      <a class="whatsappBtn" href="#">
        <img src="https://img.icons8.com/pastel-glyph/25/ffffff/whatsapp--v2.png"/>
      </a>
    </div>
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

// preencher select com DDDs...

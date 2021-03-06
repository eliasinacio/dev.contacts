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

const Contacts = {
  all: Storage.get(),

  addContact(contact) {
    Contacts.all.push(contact);
    App.reload();
  },

  removeContact(index) {
    Contacts.all.splice(index, 1);
    App.reload()
  }
}

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
    event.preventDefault()

    try {
      const values = Form.getValues();
      Contacts.addContact(values);
      Storage.set(Contacts.all);
      Modal.close();
    } catch (error) {
      alert(error.message);
    }
  }
}

const DOM = {
  createNewCard(contact) {
    const card = document.createElement('li');
  
    card.id = `c${Contacts.all.indexOf(contact)}`;
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
        <a class="deleteBtn" onclick="Contacts.removeContact(${Contacts.all.indexOf(contact)})">
          <img src="https://img.icons8.com/material-sharp/24/ffffff/trash.png"/>
        </a>
        <a class="whatsappBtn" href="https://api.whatsapp.com/send?phone=${contact.phone}" target="_blank">
          <img src="https://img.icons8.com/pastel-glyph/25/ffffff/whatsapp--v2.png"/>
        </a>
        <a class="emailBtn" href="mailto:${contact.phone}" target="_blank">
          <img src="https://img.icons8.com/material-sharp/25/ffffff/send-mass-email.png"/>
        </a>
      </div>
    `
    if (contact.icon == "") {
      card.querySelector('span').style.zIndex = 1;
    }
  
    document.querySelector('.contacts').appendChild(card);
  }  
}

const App = {
  init() {
    Contacts.all.forEach( (contact) => DOM.createNewCard(contact) );
    Storage.set(Contacts.all);
  }, 
  
  reload() {
    document.querySelector('.contacts').innerHTML = "";
    App.init()
  }
}

Storage.get()
App.init();

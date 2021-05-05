// MODAL ATIVATION 
const addContactBtn = document.querySelector('.add-contact h1');
const modalBg = document.querySelector('.modal-background');
const cancelBtn = document.getElementById('cancelBtn')

addContactBtn.addEventListener('click', () => {
  modalBg.classList.add('activated');
})

cancelBtn.addEventListener('click', () => {
  modalBg.classList.remove('activated');
})

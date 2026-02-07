'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

// keyup = > lift your finger from key
// keydown => once click it happen
// keypress => still clicked

document.addEventListener('keydown', (e) => {
  // console.log(e)
  // keydown { target: body, key: "Escape", charCode: 0, keyCode: 27 }
  // console.log(e.key); // Escape

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

(() => {
  // modal
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  // mobile menu
  const menuRefs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  menuRefs.openMenuBtn.addEventListener('click', () => {
    menuRefs.menu.classList.add('is-open');
    document.body.classList.add('no-scroll');
  });

  menuRefs.closeMenuBtn.addEventListener('click', () => {
    menuRefs.menu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
})();

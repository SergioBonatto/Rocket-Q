export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', event => {
    close()
  })
  let open = () => {
    /* Funcionalidade de atribuir a classe ACTIVE ao modal-wrapper */
    modalWrapper.classList.add('active')
  }
  let close = () => {
    /* Funcionalidade de desatribuir a classe ACTIVE ao modal-wrapper */
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}

import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

/****** Marcar como Lido ******/
//  Pegar todos os botões que possuem a classe check
const checkButtons = document.querySelectorAll('.actions a.check')
checkButtons.forEach(button => {
  // add a escuta
  button.addEventListener('click', handleClick)
})

/****** Deletar mensagem ******/
//  Pegar todos os botões que possuem a classe check
const deleteButton = document.querySelectorAll('.actions a.delete')
deleteButton.forEach(button => {
  // add a escuta
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  /* Impedir que adicione um # na url */
  event.preventDefault()
  // Altera valores da modal para marcar como lido, ao invés de delete
  const text = check ? 'Marcar como lida' : 'Excluir'

  const roomId = document.querySelector('#room-id').dataset.id
  const slug = check ? 'check' : 'delete'
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  // Abrir a modal
  modal.open()
}

/* // Altera a modal para excluír ao invés de marcar como lida
modalTitle.innerHTML = 'Excluir pergunta'
modalDescription.innerHTML =
'Tem certeza que você deseja excluir esta pergunta?'
modalButton.innerHTML = 'Sim, excluir'
modalButton.classList.add('red')
// abrir modal
modal.open() */

/* modalDescription.innerHTML = 'Deseja marcar esta pergunta como lida?'
modalButton.innerHTML = 'Sim, marcar como lida'
modalButton.classList.remove('red')
*/

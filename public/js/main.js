
import  Modal  from './modal.js'


const modal = Modal()
/*vou mudar os elementos html */

const modalTitulo = document.querySelector('.modal-full h2')

const modalDescription = document.querySelector('.modal-full p')

const modalButton = document.querySelector('.modal-full button')






const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {

button.addEventListener("click", handeleClick)
})

const delButtons = document.querySelectorAll(".actions a.del")

delButtons.forEach(button => {
button.addEventListener("click", (event) => handeleClick(event, false))
})

function handeleClick(event, check = true) {
  event.preventDefault()
  const text = check ? "Marcar como lida " : "Excluir"
  modalTitulo.innerHTML= `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
  modalButton.innerHTML = `Sim,${text.toLowerCase()}`
  modal.open()
}


//paroou em 2:00
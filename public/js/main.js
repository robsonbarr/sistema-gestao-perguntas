
import  Modal  from './modal.js'


const modal = Modal()
/*vou mudar os elementos html */

const modalTitulo = document.querySelector('.modal-full h2')

const modalDescription = document.querySelector('.modal-full p')

const modalButton = document.querySelector('.modal-full button')



//para baixo normal


const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {

button.addEventListener("click", event => {

modalTitulo.innerHTML = "marcar como lida"
  
  modal.open()
})


})

const delButtons = document.querySelectorAll(".actions a.del")

delButtons.forEach(button => {

button.addEventListener("click", event => {
  modalTitulo.innerHTML = "exluir essa pergunta"
  //button.addEventListener("click",listener[, options]);
  modal.open()
})


})


//1:45 tem que copiar as manhas de concatenaçao que há no codigo da jake para uma boa semantica de codigo 
//pusa para copiar e só entao da continuidade
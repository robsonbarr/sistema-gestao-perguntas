
export default function Modal(){

  const cancelButton = document.querySelector('.button_cancel')

  cancelButton.addEventListener("click", close)

    function open(){
        //funcionalidade de atribuir a classe active
        document.querySelector('.modal-full').classList.add("active")

    }

    function close() {
        document.querySelector('.modal-full').classList.remove("active")
 }
        return {
            open,
            close
       
   }

}
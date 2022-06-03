
export default function Modal(){
    function open(){
        //funcionalidade de atribuir a classe active
        document.querySelector('.modal-full').classList.add("active")

    }
    
    function Close() {
        //funcionalidade de remover a classe active da m0dal
 }
        return {
            open,
            close
       
   }

}
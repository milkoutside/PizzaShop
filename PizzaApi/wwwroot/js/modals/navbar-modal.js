
   export class signModal{

       sign = `<div class="modal-sign-in">
        <div class="modal-sign-in-container">
            <div class="modal-sign-in-header">
               <p class="text-black text-center mt-2">
               Вход
               </p>
               <span class="modal-sign-header-exit">x</span>
            </div>
            <div class="modal-sign-in-body">
                    <div class="input-sign pb-2">
                      <input  type="text">
                      <span>Phone</span>
                    </div>
                       <div class="input-sign pt-5">
                      <input  type="text">
                      <span>Password</span>
                    </div>
                    
            </div>
        </div>
    </div>`
       openModal(){
            $('body').append(this.sign)
       }
       closeModal(){
          
               $(".modal-sign-in").remove();
           
       }
    }
    

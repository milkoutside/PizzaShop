
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
                    <div class="sign-in-button-modal-body">
                        <button>Войти</button>
                    </div>
                    <div id="openReg" class="question-account">
                        <p>Нет аккаунта?</p>
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
    
    export class registrationModal{
        reg = `<div class="modal-sign-in">
        <div class="modal-sign-in-container">
            <div class="modal-sign-in-header">
               <p class="text-black text-center mt-2">
               Регистрация
               </p>
               <span class="modal-sign-header-exit">x</span>
            </div>
            <div class="modal-sign-in-body">
                    <div class="input-sign pb-2">
                      <input  type="text">
                      <span>Enter new Phone</span>
                    </div>
                       <div class="input-sign pt-5">
                      <input  type="text">
                      <span>Enter your Name and Surname</span>
                    </div>
                          <div class="input-sign pt-5">
                      <input  type="text">
                      <span>Enter new Password</span>
                    </div>
                    <div class="register-button-modal-body">
                        <button>Зарегистрироваться</button>
                    </div>
                    <div id="openSign" class="question-account">
                        <p>Есть аккаунт?</p>
                    </div>
                    
            </div>
        </div>
    </div>`

        openModal(){
            $('body').append(this.reg)
        }
        closeModal(){

            $(".modal-sign-in").remove();

        }
    }

import {signModal} from './modals/navbar-modal.js';
$(function(){
    let signIn = new signModal();
    $(document).on("click","#signIn",function (){
        signIn.openModal();
    })
    $(document).on("click",".modal-sign-in",function (){ 
        signIn.closeModal();
    })
    $(document).on("click",".modal-sign-header-exit",function (){
        signIn.closeModal();
    })
    $(document).on("click",".modal-sign-in-container",function (event){ // убирает наследование закрытия на другие объекты
        event.stopPropagation();
    })
    let userInfo = localStorage.getItem("u_st");
    let navbarItem = $("#sign-in");
    navbarItem.append(createSignIn())
    
    function createSignIn() {
        if(userInfo === null){
            let signInButton = `
            <div class="sign-in-button">
               <button id="signIn">Войти</button>
            </div>
        `
            return $(signInButton);
        }
        else{
            let profileButton = `
                <div class="profile">
                     <p class="fs-4 text-center text-black">d</p>
                </div>
            `
            return $(profileButton);
        }
    }
})

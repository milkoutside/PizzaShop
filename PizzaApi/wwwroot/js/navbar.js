import {signModal,registrationModal} from './modals/navbar-modal.js';
import {Cart} from './models/cart.js';
$(function(){
    let cart = new Cart();
    cart.addCounterCart();
    let signIn = new signModal();
    let reg = new registrationModal();
    
    $(document).on("click","#openReg",function (){ //открывает регистрацию
        signIn.closeModal();
        reg.openModal();
    })
    $(document).on("click","#signIn",function (){
        signIn.openModal();
    })
    $(document).on("click",".modal-sign-in",function (){ 
        signIn.closeModal();
    })
    $(document).on("click","#openSign",function (){
        reg.closeModal();
        signIn.openModal();
    })
    $(document).on("click",".modal-sign-header-exit",function (){
        signIn.closeModal();
        reg.closeModal();
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

import {addEventsNavbar} from './modals/navbar-modal.js';
import {Cart} from './models/cart.js';
import {createHeader} from "./components/navbar-component.js";
import {CartModal,addEventsCartModal} from "./modals/cart-modal.js";

$(function(){
    createHeader();
    addEventsNavbar();
    addEventsCartModal();
    let cart = new Cart();
    cart.addCounterCart();
    let cartModal = new CartModal();
    if(localStorage.getItem('r_fc') === 'true')
    {
        cartModal.createCard()
        
        localStorage.setItem('r_fc','false')
    }
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

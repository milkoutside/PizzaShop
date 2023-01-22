import {Cart} from "../models/cart.js";

export class CartModal{
    isOpen = false;
    cartModal = `
        <div class="cart-modal">
            <div id="cartList"  class="cart-modal-body">
            
             </div>
          
        </div>    
    `
    createCard()
    {
        if(!this.isOpen) {
            $('#cartModal').after(this.cartModal);
            this.getCart()
            this.isOpen = true;
        }
        else{
            $('.cart-modal').remove();
            this.isOpen = false;
        }
    }
    createProductsCard(cartList, amount)
    {
        let productsCardHtml = `
     <div class="cart-item">
            <div class="cart-item-close">
                <svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3 2.1C13.6866 1.7134 13.6866 1.0866 13.3 0.7C12.9134 0.313401 12.2866 0.313401 11.9 0.7L7 5.6L2.1 0.7C1.7134 0.3134 1.0866 0.313401 0.7 0.7C0.313401 1.0866 0.313401 1.7134 0.7 2.1L5.6 7L0.7 11.9C0.3134 12.2866 0.313401 12.9134 0.7 13.3C1.0866 13.6866 1.7134 13.6866 2.1 13.3L7 8.4L11.9 13.3C12.2866 13.6866 12.9134 13.6866 13.3 13.3C13.6866 12.9134 13.6866 12.2866 13.3 11.9L8.4 7L13.3 2.1Z"
                          fill="black"></path>
                </svg>
            </div>
            <div class="cart-item-title text-black">${cartList.name}</div>
            <div class="cart-item-ingredients text-black">${cartList.ingredients}</div>
            <div class="card-item-info">Стандарт</div>
            <div class="button-card-content-price-qtn">
                <div class="card-item-price text-black">${cartList.price} грн</div>
                <div class="button-card-qty-block">
                    <div class="quantity-control">
                        <button class="quantity-control-btn" type="button">
                            <svg height="13" viewBox="0 0 491.858 491.858" width="13"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"></path>
                            </svg>
                        </button>
                        <span>${amount}</span>
                        <button class="quantity-control-btn" type="button">
                            <svg height="13" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
                                <path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


        </div>
`
        return $(productsCardHtml);
    }
    getCart(){
        this.localCart = localStorage.getItem('cart');
        if(this.localCart == null)
        {
            console.log('cat is empty')
            $('#cartList').append('<p class="text-center text-black fs-2" style="margin-top: 25px">Корзина пустая</p>')
        }
        let cart = new Cart();
        let cardM = new CartModal();
        $.ajax({
            url: "https://localhost:7085/api/Cart/GetCart",
            type: "post",
            data:this.localCart,
            contentType:"application/json",
            dataType:"JSON",
            success: function (response) {
                 cart = response
                console.log(cart.cartProducts[0],'cart')
                console.log(cart,'responce')
                for (let i = 0; i < cart.cartProducts.length; i++)
                {
                    console.log(cart.amount[i][0],'for')
                    if(cart.cartProducts[i].productId === cart.amount[i][0])
                    $('#cartList').append(cardM.createProductsCard(cart.cartProducts[i],cart.amount[i][1]))
                 
                }
                $('#cartList').append(`
    <div class="cart-modal-footer">
        <div class="total-price"><p class="text-black">Итого:${cart.cartSum} грн</p></div>
        <div class="cart-modal-content-button-design">
            <button class="cart-modal-button-design">Оформить</button>
        </div>
    </div>
    `)}});
        }

   
    
}
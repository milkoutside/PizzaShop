import {product} from "./product.js";

export class Cart{
    cart = new product();
    localCart = [];
    
    
    addToCart(product){
                
                if( JSON.parse(localStorage.getItem('cart')))
                {   
                    this.localCart = JSON.parse(localStorage.getItem('cart'));
                    this.localCart.push(product.id);
                    localStorage.setItem('cart',JSON.stringify(this.localCart));
                }
   
                else{
                    this.localCart.push(product.id);
                    localStorage.setItem('cart',JSON.stringify(this.localCart));
                }
                this.addCounterCart(); //обновление счетчика корзины в navbar
    }
    addCounterCart(){
        let counter = JSON.parse(localStorage.getItem('cart')).length;
        let counterCart   = $('#counterCart');
        counterCart.text(counter);
        
    }
    
}
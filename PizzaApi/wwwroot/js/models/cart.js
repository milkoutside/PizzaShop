import {product} from "./product.js";

export class Cart{

    cartList = [product];
    totalSum
    
    addToCart(product){
            let localCart = [];    
                if(JSON.parse(localStorage.getItem('cart')))
                {   
                    localCart = JSON.parse(localStorage.getItem('cart'));
                    localCart.push(product.id);
                    localStorage.setItem('cart',JSON.stringify(localCart));
                }
   
                else{
                    localCart.push(product.id);
                    localStorage.setItem('cart',JSON.stringify(localCart));
                }
                this.addCounterCart(); //обновление счетчика корзины в navbar
    }
    addCounterCart(){
        let counter = JSON.parse(localStorage.getItem('cart'));
        let counterCart = $('#counterCart');
        if(counter != null && counter.length > 0)
            counterCart.text(counter.length);
        else
        {
            counterCart.text("0");
        }
        
    }
    
   
    
}
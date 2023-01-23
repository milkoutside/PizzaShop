import {product} from "./product.js";

export class Cart{
    cartProducts = [product];
    amount = []
    cartSum
    
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
    
    deleteAllItems(productId,amount)
    {   let localCart = [];
        if(JSON.parse(localStorage.getItem('cart')))
        {
            localCart = JSON.parse(localStorage.getItem('cart'));
            if(amount === 1)
            {
                localStorage.removeItem('cart')
            }
            else {
                localCart.splice(localCart.indexOf(productId), localCart.filter(x => x === productId).length)
                localStorage.setItem('cart', JSON.stringify(localCart));
            }
        }
        this.addCounterCart()
    }
    deleteFromCart(productId)
    {
        let localCart = [];
        if(JSON.parse(localStorage.getItem('cart')))
        {
            localCart = JSON.parse(localStorage.getItem('cart'));
            if(localCart.length === 1)
            {
                localStorage.removeItem('cart')
            }
            else {
                localCart.splice(localCart.indexOf(productId), 1)
                localStorage.setItem('cart', JSON.stringify(localCart));
            }
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
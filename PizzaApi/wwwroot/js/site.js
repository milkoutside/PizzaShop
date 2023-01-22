import {product} from './models/product.js';
import {card} from './models/card.js';
import {Cart} from './models/cart.js';

$(function(){
    let cart = new Cart();
    let pr = new product();
    let cd = new card();
    $.ajax({
        url: "https://localhost:7085/api/Product",
        type: "get",
        success: function (response) {

            pr = response;
            let productEl = $("#productHome");
            for (let i = 0; i < 4; i++)
            {
                productEl.append(cd.getCard(pr[i]));
                $(document).on("click","#addToCart-"+pr[i].productId,function(){
                    cart.addToCart(pr[i]);
                });
            }
        }
    });
    
    console.log("asd")
   
});

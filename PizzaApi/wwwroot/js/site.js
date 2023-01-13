import {product} from './models/product.js';
import {card} from './models/card.js';
$(function(){
    let pr = new product();
    let cd = new card();
    $.ajax({
        url: "https://localhost:7085/api/Product",
        type: "get",
        success: function (response) {

            pr = response;
            let productEl = $("#productHome");
            for (let i = 0; i < 3; i++)
            {
                productEl.append(cd.getCard(pr[i]));
                $(document).on("click","#product-"+pr[i].productId,function(){
                    console.log(pr[i].name);
                    $.ajax({
                        url: "https://localhost:7085/api/Product/"+pr[i].productId,
                        type: "get",
                        success: function (response) {
                            let ff = $("#pr"); //для корзины
                            ff.append(getProduct(response[i]))
                        }})
                });
            }
        }
    });
    function getProduct(product){
        let info = `
        <div>${product.name}</div>
        <div>${product.price}</div>
`
        return $(info);
    }
    console.log("asd")
});

import {product} from './models/product.js';
import {Cart} from './models/cart.js';
$(function(){

    let locationId = location.href.substring(location.href.indexOf('?id=')+4);
    let pr = new product();
    let cart = new Cart();
    $.ajax({
        url: "https://localhost:7085/api/Product/"+ locationId,
        type: "get",
        success: function (response) {
            
            let productPage = $("#productPage");
            productPage.append(getProduct(response));
            pr = response;
            $(document).on("click","#addToCart-"+pr.productId,function(){
                cart.addToCart(pr);
            });
        }})
    $.ajax({
        url: "https://localhost:7085/api/Product/togetgerProduct/"+ locationId,
        type: "get",
        async:true,
        success: function (response) {
            let productTogether = $("#productTogether");
            for(let i = 0; i < response.length; i++)
            productTogether.append(getProductTogether(response[i]))
        }})
    function getProduct(product){
        let productInfo = `
  <div class="col-lg-6 col-12">
    <img class="product-page-img" src="data:image/jpeg;base64,${product.image}" alt="">
  </div>
  <div class="col-lg-6 text-center">
    <div class="product-name">
         ${product.name}
    </div>
    <div class="mt-5 mx-5 product-ingredients text-start">
         ${product.ingredients}
    </div>
     <div id="addToCart-${product.productId}" class="product-button-garbage">
        <button>В корзину</button>
     </div>
  </div>
`
        return $(productInfo);
    }
    function getProductTogether(product)
    {
        let productTogether = `
        <div class="col-3 product-together">
            <a href="ProductPage.html?id=${product.productId}"> 
                <img src="data:image/jpeg;base64,${product.image}" alt="">
            </a>
        </div>
        `
        return $(productTogether);
    }
});

    







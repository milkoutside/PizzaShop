$(function(){
    let product = {
        id:Number,
        productId:String,
        name:String,
        image:[],
        ingredients:Number,
        price:Number,
        category:String,
    }
    let localUrl = location.href.indexOf('?id=')+4;
    console.log(location.href[localUrl],"Das")
    $.ajax({
        url: "https://localhost:7085/api/Product/"+ location.href[localUrl],
        type: "get",
        success: function (response) {
            
            let productPage = $("#productPage");
            productPage.append(getProduct(response));
        }})
    $.ajax({
        url: "https://localhost:7085/api/Product/togetgerProduct/"+ location.href[localUrl],
        type: "get",
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
     <div class="product-button-garbage">
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

    







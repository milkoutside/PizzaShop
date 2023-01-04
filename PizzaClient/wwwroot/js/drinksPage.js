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

    $.ajax({
        url: "https://localhost:7085/api/Product/drinks",
        type: "get",
        success: function (response) {

            product = response;
            let productEl = $("#productDrinks");
            for (let i = 0; i < product.length; i++)
            {
                productEl.append(get_card(product[i]));
                $(document).on("click","#product-"+product[i].productId,function(){
                    console.log(product[i].name);
                    $.ajax({
                        url: "https://localhost:7085/api/Product/"+product[i].productId,
                        type: "get",
                        success: function (response) {
                            let ff = $("#pr"); //для корзины
                            ff.append(getProduct(response[i]))
                        }})
                });

            }




        }

    });

    function get_card(product) {
        let card = `
 <div class="col-lg-4 mb-5"   id="product-${product.id}">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="data:image/jpeg;base64,${product.image}" alt="">
                        </div>
                        <div class="product-name text-center mt-2" id="name"   >
                            <a class="text-black" href="ProductPage.html?id=${product.productId}">${product.name}</a>
                        </div>
                        <div class="button-pizza-size mt-2 mb-2">
                            <button>Стандарт</button>
                            <button>Средняя</button>
                            <button>Большая</button>
                        </div>
                        <div class="product-ingredients">
                            <p class="text-black mt-2">${product.ingredients}
                            </p>
                        </div>
                        <div class="row card-button-bottom">
                            <div class="col">
                                <div class="product-price">
                                    <p class="text-black mt-2 ">
                                        ${product.price} грн
                                    </p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="button-product-add text-end">
                                    <button>В корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>

    `;

        return $(card);

    }

    function getProduct(product){
        let info = `
        <div>${product.name}</div>
        <div>${product.price}</div>
`
        return $(info);
    }



});

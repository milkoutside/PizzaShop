
export class card{
  
     getCard(product) {
        let card = `
<div class="col-xl-3 col-lg-4 col-sm-6 col-xs-12 mb-5" id="product-${product.id}">
    <div class="product-card">
        <div class="product-image">
            <a class="text-black" href="ProductPage.html?id=${product.productId}">
                <img src="data:image/jpeg;base64,${product.image}" alt="">
            </a>
        </div>
        <div class="product-name text-center mt-2" id="name">
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
                <div id="addToCart-${product.productId}" class="button-product-add text-end">
                    <button>В корзину</button>
                </div>
            </div>
        </div>
    </div>
</div>   
    `;

        return $(card);

    }
}
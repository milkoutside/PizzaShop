namespace PizzaApi.Services.CartService;

public class CartService
{
    public async Task<Cart> GetCart(List<Product> productsCart, int[] cartId)
    {
        List<Product> products = new List<Product>();

        foreach (var cd in cartId)
        {
            products.AddRange(productsCart.Where(p=>p.Id == cd));
        }

        var cart = await GetDistinctProducts(products, cartId);
        
        return cart;
    }

    private async Task<Cart> GetDistinctProducts(List<Product> cartProducts, int[] cartId)
    {
        int[] distinctCartId = cartId.Distinct().ToArray();
        
        var distinctCart = new List<Product>();

        var amount = new List<int[]>();

        for (int i = 0; i < distinctCartId.Length; i++)
        {
            var findProduct =  cartProducts.FirstOrDefault(c => c.Id == distinctCartId[i]);
            
            var findDuplicate = cartId.Count(c => c == distinctCartId[i]);
            
            findProduct.Price *= findDuplicate;
            
            amount.Add(new []{findProduct.Id,findDuplicate});
            
            distinctCart.Add(findProduct);
        }

        Cart cart = new Cart()
        {
            CartProducts = distinctCart,
            
            Amount = amount,
            
            CartSum = distinctCart.Sum(s => s.Price)
        };

        return cart;

    }
}
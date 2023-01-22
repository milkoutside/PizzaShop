namespace PizzaApi.Services.CartService;

public class CartService
{
    public async Task<List<Product>> GetCart(List<Product> products, int[] cartId)
    {
        List<Product> cart = new List<Product>();

        foreach (var cd in cartId)
        {
            cart.AddRange(products.Where(p=>p.Id == cd));
        }

        var sum = cart.Sum(s => s.Price);
        
        return cart;
    }
}
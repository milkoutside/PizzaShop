using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaApi.Data;
using PizzaApi.Services.CartService;

namespace PizzaApi.Controllers;
[ApiController]
[Route("/api/Cart")]
public class CartController : Controller
{
    private readonly DataContext _context;

    private readonly CartService _cartService;
    
    public CartController(DataContext context, CartService cartService)
    {
        _context = context;

        _cartService = cartService;
    }
    [HttpPost("GetCart")]
    public async Task<Cart> GetCart(int[] productId)
    {
        var pizzaList = await _context.Pizza.ToListAsync<Product>();
        
        var drinksList = await _context.Drinks.ToListAsync<Product>();
        
        pizzaList.AddRange(drinksList);

        List<Product> productList = await _cartService.GetCart(pizzaList, productId);

        var cartList = new Cart()
        {
            CartProducts = productList,

            CartSum = productList.Sum(s => s.Price)
            
        };

        return cartList;



    }
}
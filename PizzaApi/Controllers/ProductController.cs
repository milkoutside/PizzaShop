using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaApi.Data;
using PizzaApi.Models;

namespace PizzaApi.Controllers;
[ApiController]
[Route("/api/Product")]
public class ProductController : ControllerBase
{
    private readonly DataContext _context;

    public ProductController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<List<Pizza>> GetPizza()
    {
        var productList = await _context.Pizza.ToListAsync();

        return productList;
    }

    [HttpGet("{productId}")]
    public async Task<Product> GetProduct(int productId)
    {
        var pizza = await _context.Pizza.FirstOrDefaultAsync(p => p.ProductId == productId);
        
        var drinks = await _context.Drinks.FirstOrDefaultAsync(p => p.ProductId == productId);
        
        if (pizza == null && drinks == null)
        {
            throw new Exception("Null dbProduct");
        }

        if (pizza == null && drinks != null)
        {
            return drinks;
        }
        
        return pizza;
    }

    [HttpGet("togetgerProduct/{productId}")]
    public async Task<List<Product>> GetTakeTogetherProduct(int productId)
    {
        if (productId != null)
        {
            if (productId >= 100)
            {
                var pizza = await _context.Pizza.Take(4).ToListAsync();

                return new List<Product>(pizza);
            }

           
        }
        var drinks = await _context.Drinks.ToListAsync();
        
        return new List<Product>(drinks);

    }

    [HttpGet("drinks")]
    public async Task<List<Drinks>> GetDrinks()
    {
        var drinks = await _context.Drinks.ToListAsync();

        return drinks;
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaApi.Data;
using PizzaApi.Models;
using PizzaApi.Services.ProductServices;

namespace PizzaApi.Controllers;
[ApiController]
[Route("/api/Product")]
public class ProductController : ControllerBase
{
    private readonly DataContext _context;

    private readonly ProductService _productService;

    public ProductController(DataContext context, ProductService productService)
    {
        _context = context;

        _productService = productService;

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
        
            if (productId >= 100)
            {
                var pizza = await _context.Pizza.ToListAsync<Product>();
                
                pizza =  await _productService.GetProductTogether(pizza,4, productId);
                
                return pizza;
             
            }
            else
            {
                var pizza = await _context.Pizza.ToListAsync<Product>();
                
                var drinks = await _context.Drinks.ToListAsync<Product>();

                var listTogether = await _productService.GetProductTogether(pizza, pizza.Count, productId);

                listTogether[3] = drinks[0]; 

                return listTogether;
            }

    }

    [HttpGet("drinks")]
    public async Task<List<Drinks>> GetDrinks()
    {
        var drinks = await _context.Drinks.ToListAsync();

        return drinks;
    }
}
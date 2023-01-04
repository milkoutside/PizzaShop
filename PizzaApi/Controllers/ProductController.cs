using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaApi.Data;

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
    public async Task<List<Product>> GetPizza()
    {
        var productList = await _context.Product.Where(p => p.Category == "Pizza").ToListAsync();

        return productList;
    }

    [HttpGet("{productId}")]
    public async Task<Product> GetProduct(int productId)
    {
        var product = await _context.Product.FirstOrDefaultAsync(p => p.Id == productId);
        
        if (product == null)
        {
            throw new Exception("Null dbProduct");
        }
        
        return product;
    }

    [HttpGet("togetgerProduct/{productId}")]
    public async Task<List<Product>> GetTakeTogetherProduct(int productId)
    {
        var product = await _context.Product.Where(p => p.ProductId != productId).ToListAsync();

        return product;
    }

    [HttpGet("drinks")]
    public async Task<List<Product>> GetDrinks()
    {
        var drinks = await _context.Product.Where(d => d.Category == "Drinks").ToListAsync();

        return drinks;
    }
}
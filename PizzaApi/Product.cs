namespace PizzaApi;

public class Product
{
    public int Id { get; set; }
    
    public int ProductId { get; set; }
    
    public string Name { get; set; }
    
    public byte[] Image { get; set; }
    
    public string Ingredients { get; set; }

    public decimal Price { get; set; }
    public string Category { get; set; }

    public decimal GetDiscountPrice(Product product)
    {
        return product.Price/2;
    }
    
}
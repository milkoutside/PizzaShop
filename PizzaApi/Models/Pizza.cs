namespace PizzaApi.Models;

public class Pizza : Product
{
    public Pizza(int id, int productId, string name, byte[] image, string ingredients, decimal price, string category)
    {
        Id = id;
        
        ProductId = productId;
        
        Name = name;
        
        Image = image;
        
        Ingredients = ingredients;
        
        Price = price;
        
        Category = category;
    }
}
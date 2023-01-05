namespace PizzaApi.Models;

public class Drinks : Product
{
    public Drinks(int id, int productId, string name, byte[] image, string ingredients, decimal price, string category)
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
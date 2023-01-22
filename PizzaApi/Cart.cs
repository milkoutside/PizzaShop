namespace PizzaApi;

public class Cart
{
    public List<Product> CartProducts { get; set; }
    
    public List<int[]> Amount { get; set; }
    public decimal CartSum { get; set; }
}
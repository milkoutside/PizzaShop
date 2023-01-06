namespace PizzaApi.Services.ProductServices;

public class ProductService
{
    public async Task<List<Product>> GetProductTogether(List<Product>? pizza,int size)
    {
        //Обязательным условием является то, что если пользователь выберет страницу с напитком, то ему будет предлагать только пиццу.
        //Если пользователь выберет пиццу, то тогда 3 пиццы и 1 напиток.
        
        var rndPizza = await Task.Run(()=>FillRndArray(size));

        List<Product> listTogether = new List<Product>();
        
        if (pizza == null)
            
            return null;

        for (int i = 0; i < size; i++)
        {
            listTogether.Add(pizza[rndPizza[i]]);
        }

        return listTogether;
        

      


    }
    
    
    
    
    
    
    
    private List<int> FillRndArray(int size)
    {
        List<int> arr = new List<int>();
        Random rnd = new Random((new Random()).Next());
        for (int i = 0; i < size; i++)
        {
            int j = rnd.Next(0, size); 
            while (arr.Contains(j))
            {
                j = rnd.Next(0, size);
            }
            // тут проверяем
             arr.Add(j); 
        }

        return arr;
    }
}
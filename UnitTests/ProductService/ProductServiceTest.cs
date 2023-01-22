using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PizzaApi;
using PizzaApi.Controllers;
using PizzaApi.Data;
using PizzaApi.Models;
using PizzaApi.Services.ProductServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PizzaApi.Services;
using PizzaApi.Data;
using Microsoft.CodeAnalysis;
using Xunit.Abstractions;

namespace UnitTests.ProductServiceTest
{
    
        public class ProductServiceTest
        {
            private readonly ITestOutputHelper _testOutputHelper;

            public ProductServiceTest(ITestOutputHelper testOutputHelper)
            {
                _testOutputHelper = testOutputHelper;
            }

            public async Task<List<int>> GetProductTogether(List<int>? pizza,int size, int currentId)
            {

                var rndPizza = await Task.Run(()=>FillRndArray(size,currentId));

                List<int> listTogether = new List<int>();
        
                if (pizza == null)
            
                    return null;

                for (int i = 0; i < 4; i++)
                {
                    listTogether.Add(pizza[rndPizza[i]]);
                }

                return listTogether;
        

      


            }

            private List<int> FillRndArray(int size, int currentId)
            {
                List<int> arr = new List<int>();
                Random rnd = new Random((new Random()).Next());
                for (int i = 0; i < 4; i++)
                {
                    int j = rnd.Next(0, size); 
                    while (arr.Contains(j) || j == currentId-1)
                    {
                        j = rnd.Next(0, size);
                    }
                    // тут проверяем
                    arr.Add(j); 
                }

                return arr;
            }
           


    
            [Fact]
            public async void TestFillArray()
            {
                int requestProductId = 2;

                List<int> productList = new List<int>(){1,2,3,4,5,6,7,8,9};
            //arrange

            var getTogether = await GetProductTogether(productList, productList.Count, requestProductId);
            
            
            //act
           
            
            // assert
            foreach (var item in getTogether)
            {
                Assert.NotEqual(item, requestProductId);
                
            }
            
            }
           
        }
        
}

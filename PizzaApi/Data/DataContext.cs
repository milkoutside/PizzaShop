using Microsoft.EntityFrameworkCore;
using PizzaApi.Models;

namespace PizzaApi.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) :base(options)
    {
        Database.EnsureCreated();

    }

    public DbSet<Pizza> Pizza { get; set; }
    
    public DbSet<Drinks> Drinks { get; set; }
}
using Microsoft.EntityFrameworkCore;
using PizzaApi.Data;
using PizzaApi.Services.ProductServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddCors(options => options.AddPolicy(name: "Pizza",
    policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();


    }));
builder.Services.AddSingleton<ProductService>();
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer("Server = DESKTOP-BI84236;Database=Pizza;Trusted_Connection=True;Encrypt=False;TrustServerCertificate=true;");
});

var app = builder.Build();




app.UseStaticFiles();

app.UseRouting();

app.UseHttpsRedirection();
app.UseCors("Pizza");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
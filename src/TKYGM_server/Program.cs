using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    WebRootPath = Path.Combine("ITDK_app")
});


builder.Services.AddRazorPages();
builder.Services.AddControllersWithViews();
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();


app.Run();

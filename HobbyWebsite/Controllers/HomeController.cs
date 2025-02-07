using Microsoft.AspNetCore.Mvc;

namespace LegoResaleHobby.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/Index
        public IActionResult Index()
        {
            return View();
        }

        // GET: /Home/Calculator
        public IActionResult Calculator()
        {
            return View();
        }
    }
}

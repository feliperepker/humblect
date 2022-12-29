using ExternaAGVAPI.Data;
using ExternaAGVAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ExternaAGVAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly ExternalAgvContext _context;

        public UserController(ExternalAgvContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateNewUser([FromBody] Users user)
        {
            _context.tb_users.Add(user);
            _context.SaveChanges();
            return Ok();
        }
    }
}

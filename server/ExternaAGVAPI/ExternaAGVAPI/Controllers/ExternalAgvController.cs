using ExternaAGVAPI.Data;
using ExternaAGVAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ExternaAGVAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExternalAgvController : Controller
    {
        private readonly ExternalAgvContext _context;

        public ExternalAgvController(ExternalAgvContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetInformations()
        {
            List<ExternalAgv> info = _context.tb_externalagv.ToList();
            return Ok(info);
        }


    }
}

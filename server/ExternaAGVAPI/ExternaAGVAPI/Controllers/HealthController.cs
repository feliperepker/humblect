using Microsoft.AspNetCore.Mvc;

namespace ExternaAGVAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HealthController : Controller
    {
        [HttpGet]
        public ActionResult Health()
        {
            try
            {
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message.ToString());
            }

        }
    }
}
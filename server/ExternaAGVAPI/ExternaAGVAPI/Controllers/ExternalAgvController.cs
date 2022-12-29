using ExternaAGVAPI.Data;
using ExternaAGVAPI.Models;
using Microsoft.AspNetCore.Authorization;
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

        [HttpPut]
        public IActionResult ChangeDatas([FromBody] ExternalAgv data)
        {
            _context.Entry(data).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Ok();
        }

        [HttpPost]
        public IActionResult SaveMetrics([FromBody] Metrics data)
        {
            MetricsDb item = new MetricsDb();
            item.date = DateTime.Now;
            item.cycleNumber = data.cycleNumber;
            item.cycleTime = data.cycleTime;
            item.runningTime = data.runningTime;
            item.stoppedTime = data.stoppedTime;
            item.loadTime = data.loadTime;
            item.unloadTime = data.unloadTime;

            _context.tb_metrics.Add(item);
            _context.SaveChanges();
            return Ok();
        }
    }
}

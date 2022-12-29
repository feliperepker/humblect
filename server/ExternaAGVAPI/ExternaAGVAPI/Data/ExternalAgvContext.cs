using ExternaAGVAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ExternaAGVAPI.Data
{
    public class ExternalAgvContext : DbContext
    {
        public ExternalAgvContext(DbContextOptions<ExternalAgvContext> opt) : base(opt)
        {

        }
        public DbSet<ExternalAgv> tb_externalagv { get; set; }
        public DbSet<MetricsDb> tb_metrics { get; set; }
        public DbSet<Users> tb_users { get; set; }
    }
}

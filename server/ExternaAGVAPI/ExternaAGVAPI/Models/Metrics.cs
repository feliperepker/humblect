using System.ComponentModel.DataAnnotations;

namespace ExternaAGVAPI.Models
{
    public class Metrics
    {
        [Key]
        public int Id { get; set; }
        public int cycleNumber { get; set; }
        public int cycleTime { get; set; }
        public int runningTime { get; set; }
        public int stoppedTime { get; set; }
        public int loadTime { get; set; }
        public int unloadTime { get; set; }
    }
}

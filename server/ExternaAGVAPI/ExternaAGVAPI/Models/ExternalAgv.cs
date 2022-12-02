using System.ComponentModel.DataAnnotations;

namespace ExternaAGVAPI.Models
{
    public class ExternalAgv
    {
        [Key]
        public int index { get; set; }
        public bool autonomousOn { get; set; }
        public bool modeOutdoorOn { get; set; }
        public bool modeIndoorOn { get; set; }
        public bool scannerSafety { get; set; }
        public bool scannerWarn { get; set; }
        public bool lidarSafety { get; set; }
        public bool lidarWarn { get; set; }
        public bool ultrasoundSafety { get; set; }
        public bool outdoorPointMissed { get; set; }
        public bool outdoorPathMissed { get; set; }
        public bool outdoorVelSafety { get; set; }
        public bool stopPointPickup { get; set; }
        public bool stopPointDrop { get; set; }
        public bool endRoute { get; set; }
        public float tractionVelocity { get; set; }
        public string antLat { get; set; }
        public string antLong { get; set; }
        public int antSvs { get; set; }
        public int antQuality { get; set; }
        public float lastVelocity { get; set; }
        public int lastSequence { get; set; }
        public bool lastOnStraight { get; set; }
        public float nextVelocity { get; set; }
        public int nextSequence { get; set; }
        public bool nextOnStraight { get; set; }
        public float navAngle { get; set; }
        public float pathDeviation { get; set; }
        public float distToNextPoint { get; set; }
        public float distPointToPoint { get; set; }
        public float distFromLastPoint { get; set; }
        public int route1Length { get; set; }
        public int pickUpPoint { get; set; }
        public int dropPoint { get; set; }
        public bool lidarStartLoc { get; set; }
        public bool lidarForceUpdate { get; set; }
        public float lidarPoseX { get; set; }
        public float lidarPoseY { get; set; }
        public float lidarYaw { get; set; }
        public bool lidarLocOn { get; set; }
        public int lidarPoseQuality { get; set; }
    }
}

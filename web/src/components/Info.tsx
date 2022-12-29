import { ProgressBar } from "./ProgressBar"
import { TablePoints } from "./TablePoints"
import { TableSafety } from "./TableSafety"
import { TableVelocity } from "./TableVelocity"

let infos = [
  {key: "Velocity", value: "10 km/h"},
  {key: "Status", value: "Stopped"},
  {key: "NextPoint", value: "BR127"},
  {key: "Total Trips Today:", value: 10},
  {key: "Route", value: "Kd_Eixo"},
  {key: "Scanners", value: "Clear"}
]
interface UtilityProps{
  lastVelocity: number,
  nextVelocity: number,
  tractionVelocity: number,
  autonomousOn: boolean,
  scannerSafety: boolean, 
  scannerWarn: boolean,
  ultrasoundSafety: boolean,
  pathDeviation: number,
  nextSequence: number,
  distToNextPoint: number, 
  distPointToPoint: number, 
  lastSequence: number,
}
export interface ExternalProps{
    index: number,
    autonomousOn: boolean, 
    modeOutdoorOn: boolean,
    modeIndoorOn: boolean,
    scannerSafety: boolean, 
    scannerWarn: boolean, 
    lidarSafety: boolean,
    lidarWarn: boolean,
    ultrasoundSafety: boolean,
    outdoorPointMissed: boolean,
    outdoorPathMissed: boolean,
    outdoorVelSafety: boolean,
    stopPointPickup: boolean,
    stopPointDrop: boolean,
    endRoute: boolean,
    tractionVelocity: number, //velocidade q esta
    antLat: string,
    antLong: string,
    antSvs: number,
    antQuality: number,
    lastVelocity: number, //vel q deveria 
    lastSequence: number, //ultimo ponto //
    lastOnStraight: boolean, 
    nextVelocity: number, //prox vel
    nextSequence: number, //prox ponto  //
    nextOnStraight: boolean, 
    navAngle: number,
    pathDeviation: number,
    distToNextPoint: number, //
    distPointToPoint: number, //
    distFromLastPoint: number,
    route1Length: number,
    pickUpPoint: number,
    dropPoint: number,
    lidarStartLoc: boolean,
    lidarForceUpdate: boolean,
    lidarPoseX: number,
    lidarPoseY: number,
    lidarYaw: number,
    lidarLocOn: boolean,
    lidarPoseQuality: number
}


export function Info(props: UtilityProps){
  return(
      <section className="flex justify-evenly items-center w-[100vw] mb-6  ">
        <div>
          <TableVelocity
            lastVelocity={props.lastVelocity}
            nextVelocity={props.nextVelocity}
            tractionVelocity={props.tractionVelocity}
          />
        </div>

        <div>
        <TableSafety
            autonomousOn={props.autonomousOn}
            scannerSafety={props.scannerSafety}
            scannerWarn={props.scannerWarn}
            ultrasoundSafety={props.ultrasoundSafety}
            pathDeviation={props.pathDeviation}
          />
        </div>
        <TablePoints
         nextSequence={props.nextSequence} 
         distToNextPoint={props.distToNextPoint} 
         distPointToPoint={props.distPointToPoint}    
         lastSequence={props.lastSequence}    
         />

      </section>
  )
}
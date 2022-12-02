let infos = [
  {key: "Velocity", value: "10 km/h"},
  {key: "Status", value: "Stopped"},
  {key: "NextPoint", value: "BR127"},
  {key: "Total Trips Today:", value: 10},
  {key: "Route", value: "Kd_Eixo"},
  {key: "Scanners", value: "Clear"}
]

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
    tractionVelocity: number,
    antLat: number,
    antLong: number,
    antSvs: number,
    antQuality: number,
    lastVelocity: number,
    lastSequence: number,
    lastOnStraight: boolean,
    nextVelocity: number,
    nextSequence: number,
    nextOnStraight: boolean,
    navAngle: number,
    pathDeviation: number,
    distToNextPoint: number,
    distPointToPoint: number,
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


export function Info({lastVelocity, nextVelocity, distToNextPoint, autonomousOn, scannerSafety, scannerWarn}: ExternalProps){
  return(
      <section className="flex justify-center w-[20vw]">
        <table className="h-28 mt-2 w-[19vw] max-w-sm font-scaniaCondensed font-extralight ">
          <thead className="bg-[#041E42] text-white font-scaniaCondensed font-light border-[#041E42] border-[1px]">
            <tr>
              <th className="p-1" colSpan={2}>AGV - Externo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Last Velocity</td>
              <td className={`border-gray-200 border-[1px] text-center}`}>lastVelocity</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Next Velocity</td>
              <td className={`border-gray-200 border-[1px] text-center}`}>nextVelocity</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Distance to Next Point</td>
              <td className={`border-gray-200 border-[1px] text-center}`}>distToNextPoint</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">AutonomousOn</td>
              <td className={`border-gray-200 border-[1px] text-center}`}>autonomousOn</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Scanner Safety</td>
              <td className={`border-gray-200 border-[1px] text-center}`}>scannerSafety</td>
            </tr>
          </tbody>
        </table>
      </section>
  )
}

interface SafetyProps{
  autonomousOn: boolean,
  scannerSafety: boolean, 
  scannerWarn: boolean,
  ultrasoundSafety: boolean,
  pathDeviation: number,
}

export function TableSafety(props: SafetyProps){
  return(
      <div className="font-scaniaCondensed bg-white rounded-lg shadow-md w-[20vw] min-w-[300px] pb-2">
        <div className="flex items-center mb-3 justify-center px-6 bg-[#1b2f4d] text-white font-light rounded-t-lg h-12">
          <p>Safety</p>
        </div>
        <div className= "flex justify-between my-4 mx-6">
          <p>Autonomous Mode</p>
          <p className={`mr-3 font-bold ${props.autonomousOn ? 'text-green-500' : 'text-red-500'}`}>{props.autonomousOn ? 'ON' : 'OFF'}</p>
        </div>
        <div className="flex justify-between my-4 mx-6">
          <p>Scanner</p>
          <p className={`mr-3 font-bold ${props.scannerSafety ? 'text-red-500' : props.scannerWarn ? 'text-yellow-500' : 'text-green-500'}`}>{props.scannerSafety ? 'Stopped' : props.scannerWarn ? 'Warn' : 'OK'}</p>
        </div>
        <div className="flex justify-between my-4 mx-6">
          <p>Ultrasound</p>
          <p className={`mr-3 font-bold ${props.ultrasoundSafety ? 'text-yellow-500' : 'text-green-500'}`}>{props.ultrasoundSafety ? 'Warn' : 'OK'}</p>
        </div>
        <div className="flex justify-between my-4  mx-6">
          <p>Path Deviation</p>
          <p className="mr-3">{props.pathDeviation}</p>
        </div>
      </div>
  )
}
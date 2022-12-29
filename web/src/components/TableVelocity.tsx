
interface VelocityProps{
  lastVelocity: number,
  nextVelocity: number,
  tractionVelocity: number,
}

export function TableVelocity(props: VelocityProps){
  return(
    <div className="mb-3 font-scaniaCondensed bg-white rounded-lg shadow-md w-[20vw] min-w-[300px] pb-3">
      <div className="flex font-scaniaCondensed items-center mb-3 justify-center px-6 bg-[#1b2f4d] text-white font-light rounded-t-lg h-11">
        <p>Velocity</p>
      </div>
      <div className="flex justify-between my-4 mx-6">
        <p >Real Velocity</p>
        <p className="mr-3">{props.tractionVelocity}</p>
      </div>
      <div className="flex justify-between my-4 mx-6">
        <p>Ideal Velocity</p>
        <p className="mr-3">{props.lastVelocity}</p>
      </div>
      <div className="flex justify-between my-4 mx-6">
        <p>Next Velocity</p>
        <p className="mr-3">{props.nextVelocity}</p>
      </div>
    </div>
  )
}
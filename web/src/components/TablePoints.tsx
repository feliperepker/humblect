
interface PointsProps{
  nextSequence: number,
  distToNextPoint: number, 
  distPointToPoint: number, 
  lastSequence: number,
}


export function TablePoints(props: PointsProps){
  return(
    <div className="mb-3  bg-white rounded-lg shadow-md w-[30vw] max-w-[400px] min-w-[300px] ">
      <div className="flex font-scaniaCondensed items-center h-12 justify-center bg-[#1b2f4d] text-white font-light rounded-t-lg ">
        <p>Points Distance</p>
      </div>
      <div className="flex flex-col font-scaniaCondensed items-center px-6 ">
        <div className="flex justify-between w-full mb-4 mt-4">
          <p>Distance to next point</p>
          <p className="mr-3">{props.distToNextPoint}</p>
        </div>
        <div className="flex justify-between w-full mb-4 mt-">
        <p>Distance from point <span className="font-bold">{props.lastSequence}</span> to <span className="font-bold">{props.nextSequence}</span></p>
        <p className="mr-3">{props.distPointToPoint}</p>
      </div>
      </div>
  </div>
  )
}
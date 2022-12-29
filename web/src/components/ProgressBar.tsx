import { ChatTeardrop } from "phosphor-react";
import { useState } from "react";

interface ProgressBarProps{
  lastPoint:number;
  stopPointPickup: boolean;
  stopPointDrop: boolean;
  route1Length: number;
}

export function ProgressBar(props: ProgressBarProps){
  const [pointsPopUp, setPointsPopUp] = useState(false)

  let progress = props.lastPoint    //86
  let progressPopUp = props.lastPoint - 1.5
  return(
    <div className={`w-[${props.route1Length}vw]`} style={{width:`${props.route1Length}vw`}}>
      <div className={` mt-6 bg-gray-700 rounded-full h-2.5`} style={{width:`${props.route1Length}vw`}}>
          <div className={`bg-blue-500 h-2.5 transition-all rounded-full`} style={{width: String(progress) + 'vw'}}></div>
      </div>
      <div className={`mt-1 transition-all ease-in-out duration-300 relative`} style={{marginLeft: String(progressPopUp) + 'vw'}} >
        <ChatTeardrop size={40} className='rotate-[135deg] cursor-pointer text-gray-400 bg-w' weight="thin" onClick={() => {setPointsPopUp(true)}}></ChatTeardrop>
        <p onClick={() => {setPointsPopUp(true)}} className={`absolute cursor-pointer top-2 ${props.lastPoint >= 10 ? 'left-[11px]' : 'left-4'}`}>{props.lastPoint}</p>
        {
          props.stopPointPickup ? 
          <div className="absolute font-scaniaCondensed flex items-center justify-center gap-[2px] -left-9 h-8 w-32 bg-white rounded-lg shadow-md">
            <p>Loading Axle</p> 
            <span className="animate-jumpAnimation1 text-lg">.</span>
            <span className="animate-jumpAnimation2 text-lg">.</span>
            <span className="animate-jumpAnimation3  text-lg">.</span> 
            </div> : props.stopPointDrop ?  <div className="absolute font-scaniaCondensed flex items-center justify-center gap-[2px] -left-9 h-8 w-32 bg-white rounded shadow-md">
            <p>Unloading Axle</p> 
            <span className="animate-jumpAnimation1 text-lg">.</span>
            <span className="animate-jumpAnimation2 text-lg">.</span>
            <span className="animate-jumpAnimation3 text-lg">.</span> 
            </div> : ''
        }
        <div className={`absolute cursor-pointer top-0 -left-16 flex flex-col text-sm items-center justify-center transition-all p-6 py-6 rounded-lg h-14 w-44 shadow-md bg-white border-[1px] border-gray-200 ${pointsPopUp ? '' : 'hidden'}`} onClick={() => {setPointsPopUp(false)}}>
          <p>Last Point: {props.lastPoint}</p>
          <p>Total of points: {props.route1Length}</p>
        </div>
      </div>
    </div>
  )
}
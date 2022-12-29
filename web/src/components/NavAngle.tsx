
interface navAngleProps{
  navAngle: number;  
}

export function NavAngle(props : navAngleProps){
  console.log(props.navAngle)
  let numberString = String(props.navAngle) + 'deg'
  return(
    
    <div className="flex flex-col items-center relative">
      <h2 className="font-scaniaHeadline mb-6 text-lg">Nav Angle</h2>
     <img className="z-20 w-[400px]" src="./humble1bg.png" alt="" />
     <img className={`absolute top-10 right-[105px] w-[180px] `} src="./humble2bg.png" alt="" style={{rotate: numberString}}/>
     <p className="font-scaniaCondensed text-lg mt-4">{props.navAngle} Deg</p>
    </div>
    
  )
}
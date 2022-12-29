interface VelocityBarProps{
  tractionVelocity: number,
}


export function VelocityBar(props: VelocityBarProps){

  let teste = props.tractionVelocity * 30
  let realVelocity = String(teste) + 'px'


  return (
    <div className="flex flex-col items-center h-80">
      <h3 className="font-scaniaHeadline text-lg">Velocity Bar</h3>
      <h3 className="font-scaniaCondensed mb-4 px-4 py-2 mt-20 rounded-lg bg-gray-200 shadow-inner">{props.tractionVelocity} Km/h</h3>
      <div className="w-[600px] h-8 bg-gray-300 rounded-lg">
        <div className={`h-8 rounded-l-lg border-r-8 border-green-500 ${props.tractionVelocity > 12 ? 'bg-red-500' : 'bg-gray-700'}`} style={{width: realVelocity}}>
        </div>
      </div>
      <div className="flex w-full justify-between font-scaniaCondensed">
        <p>0 Km/h</p>
        <p>20 Km/h</p>
      </div>
    </div>
  
  )
    
}
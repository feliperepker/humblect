
import { useEffect, useState } from "react";
import { ExternalProps, Info } from "../components/Info";
import { Map } from "../components/Map";
import { NavAngle } from "../components/NavAngle";
import { ProgressBar } from "../components/ProgressBar";
import { VelocityBar } from "../components/VelocityBar";
import api from "../services/api";


export function ControlTower(){
  const [data, setData] = useState<ExternalProps>(Object)

    useEffect(() =>{
      const interval = setInterval(() =>{
        api.get('/ExternalAgv').then(response =>{
          setData(response.data[0])
        })
      },1000);
      return () => clearInterval(interval)
    },[])
  console.log(data)
    
  return(
    <div>
    <div className='flex flex-col items-center overflow-x-hidden'>
      <Map
      antLat= {data?.antLat}
      antLong= {data?.antLong}
      antQuality= {data?.antQuality}
      lidarPoseQuality= {data?.lidarPoseQuality} 
      dropPoint={data?.dropPoint}
      pickUpPoint={data?.pickUpPoint}
      lastSequence={data?.lastSequence}
      />
      <div className='flex flex-col items-center h-[850px]'>
        <ProgressBar
        lastPoint={data?.lastSequence}
        stopPointPickup={data?.stopPointPickup}
        stopPointDrop={data?.stopPointDrop}
        route1Length={data?.route1Length}
        />
        <h2 className='mt-9 font-scaniaHeadline font-extrabold text-2xl mb-14'>Real Time Informations</h2> 
        <Info 
            lastVelocity={data?.lastVelocity}
            nextVelocity={data?.nextVelocity}
            tractionVelocity={data?.tractionVelocity}
            autonomousOn={data?.autonomousOn}
            scannerSafety={data?.scannerSafety}
            scannerWarn={data?.scannerWarn}
            ultrasoundSafety={data?.ultrasoundSafety}
            pathDeviation={data?.pathDeviation} 
            nextSequence={data?.nextSequence} 
            distToNextPoint={data?.distToNextPoint} 
            distPointToPoint={data?.distPointToPoint}      
            lastSequence={data?.lastSequence}  
            />
            <div className="flex justify-around items-center mt-8 w-screen">
              <NavAngle
              navAngle={data?.navAngle}
              />
              <VelocityBar
              tractionVelocity={data?.tractionVelocity}
              />
            </div>
      </div>
     
    </div>
  </div>
  )
}
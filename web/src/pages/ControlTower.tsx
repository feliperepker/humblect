
import { useEffect, useState } from "react";
import { ExternalProps, Info } from "../components/Info";
import { Map } from "../components/Map";
import api from "../services/api";


export function ControlTower(){
  const [data, setData] = useState<ExternalProps>(Object)
  console.log(data)
    useEffect(() =>{
      const interval = setInterval(() =>{
        api.get('/ExternalAgv').then(response =>{
          setData(response.data[0])
        })
      },1000);
      return () => clearInterval(interval)
    },[])


  return(
    <div>
    <div className='flex'>
      <div className='text-center h-[90vh] overflow-x-hidden overflow-y-scroll scroll'>
       <h2 className='mt-1 font-scaniaCondensed font-extrabold text-xl'>Real Time Informations</h2> 
       <Info 
        
       />
      </div>
      <Map/>
    </div>
  </div>
  )
}
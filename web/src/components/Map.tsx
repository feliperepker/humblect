import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'

interface MapProps{
  antLat: string,
  antLong: string,
  antQuality: number,
  lidarPoseQuality: number
}
function checkGPS(inputGPS: string) {
  if(inputGPS){
    var inputGPSString = inputGPS?.replace('.', '')
    var firstNumber = Number(inputGPSString?.slice(0,3))
    var lastNumber = Number(inputGPSString?.slice(3,inputGPSString.length)) / 60
    return firstNumber - lastNumber
  }return 0
  //dividir por 60 subtrair o retirado
}

export function Map(props : MapProps){
  

  const icon = new Icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/997/997066.png',
      iconSize: [45, 45],
  }
  )
  return(
      <MapContainer className='w-[80vw] h-[90vh] ml-auto' center={[-23.71260, -46.56599]} zoom={18} scrollWheelZoom={true}>
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={icon} position={[checkGPS(props.antLat), checkGPS(props.antLong)]}>
        <Popup>
         Antena Quality: {props.antQuality}<br/>
         Lidar Pose Quality: {props.lidarPoseQuality}

        </Popup>
      </Marker>
    </MapContainer>
  )
}
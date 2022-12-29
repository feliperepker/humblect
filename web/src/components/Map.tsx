import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'

interface MapProps{
  antLat: string,
  antLong: string,
  antQuality: number,
  lidarPoseQuality: number,
  pickUpPoint: number,
  dropPoint: number,
  lastSequence: number,
}
function checkGPS(inputGPS: string) {
  if(inputGPS){
    var firstNumber = Number(inputGPS?.slice(0,3))
    var lastNumber = Number(inputGPS?.slice(3,inputGPS.length)) / 60
    return firstNumber - lastNumber
  }return 0
}

function centerIcon(position: number){
  return position + 0.00004
}
function centerIcon2(position: number){
  return position - 0.00004
}
export function Map(props : MapProps){
  
  const icon = new Icon({
      iconUrl: './agvindo.png',
      iconSize: [75, 45],
  }
  )
  const icon2 = new Icon({
    iconUrl: './agvvoltando.png',
    iconSize: [75, 45],
}
)
  return(
      <div className='sm:z-10'>
        <MapContainer className='w-[100vw] h-[50vh] min-h-[400px] ml-auto max-sm:ml-0 max-sm:z-20 max-sm:w-screen max-sm:h-[50vh]' center={[-23.71230, -46.56610]} zoom={18} scrollWheelZoom={false}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
            <Marker icon={props.lastSequence > props.dropPoint ? icon2 : icon} position={[centerIcon(-23.71230), centerIcon2(-46.56610)]/*[checkGPS(props?.antLat), checkGPS(props?.antLong)]*/}>
              <Popup>
              Antena Quality: {props?.antQuality}<br/>
              Lidar Pose Quality: {props?.lidarPoseQuality}
              </Popup>
            </Marker>
        </MapContainer>
      </div>
  )
}
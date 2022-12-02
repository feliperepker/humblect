import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
export function Map(){
  
  const icon = new Icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/997/997066.png',
      iconSize: [45, 45],
  }
  )
  return(
      <MapContainer className='w-[80vw] h-[90vh] ml-auto' center={[-23.71260, -46.56599]} zoom={18} scrollWheelZoom={false}>
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={icon} position={[-23.71213, -46.56730]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
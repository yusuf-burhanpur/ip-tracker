import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ChangeViewMap from "./mapView";
import {iconView} from "./Icons";

const MapComponent = ({styles, coordinates}) => {
    return (
        <MapContainer center={coordinates} zoom={14} scrollWheelZoom={false} className={styles}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <ChangeViewMap coords={coordinates} />
  <Marker position={coordinates} icon={iconView}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    )
}

export default MapComponent;
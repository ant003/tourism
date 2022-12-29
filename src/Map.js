import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import { Link } from 'react-router-dom';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Map = () => {
    const position = [9.81191642,-83.77624512];
    const markerIcon = new L.icon({
        iconUrl: icon,
    });
    return(

        <MapContainer className="map" center={position} zoom={8} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
                <Popup>
                    <Link to="/">Inicio</Link>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
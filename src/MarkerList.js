import {Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';

const MarkerList = ( {places} ) =>{
    const markerIcon = new L.icon({
        iconUrl: icon,
    });
    return(
        <div>
            {places.map(place =>(
                <Marker key={place.id} position={place.coordenate} icon={markerIcon}>
                    <Popup>
                        <Link to={`/place/${place.id}`}>{place.name}</Link>
                    </Popup>
                </Marker>
            ))}

        </div>

    );
}

export default MarkerList;
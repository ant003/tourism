import style from './map.module.css'
import { MapContainer, TileLayer } from 'react-leaflet';
import useFetch from '../customHooks/useFetch';
import MarkerList from './MarkerList';

const Map = () => {
    const startPosition = [9.81191642, -83.77624512];
    const { data: places, isLoading, error } = useFetch('http://localhost:8000/places');

    return (

        <MapContainer className={style.map} center={startPosition} zoom={8} scrollWheelZoom={false}>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places && <MarkerList places={places} />}
        </MapContainer>
    );
}

export default Map;
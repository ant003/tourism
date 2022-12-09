import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Place = () => {
    const { id } = useParams();

    const { data:place, isLoading, error} = useFetch(`http://localhost:8000/places/${id}`);

    return(
        <div className="place">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <div className="banner">
                <div className="bannerCont">
                    <h1>{ place && place.name }</h1>
                    <p>Test</p>
                </div>
            </div>
            <div className="content">
                <p><strong>Distancia:</strong> { place && place.distance}</p>
                <p><strong>Difcultad:</strong> { place && place.difficulty}</p>
                <p><strong>Vehículo:</strong> { place && place.vehicle}</p>
                <p><strong>Precio:</strong> { place && place.price}</p>
                <p><strong>Descripción:</strong> { place && place.description}</p>
            </div>
        </div>
    );
}

export default Place;
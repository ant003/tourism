import Square from "./Square";
import { Link } from "react-router-dom";

const PlaceList = ( {places} ) => {
    return(
            <div className="placeList" >
            {places.map(place => (
                <Link to={`/place/${place.id}`} key={place.id}>
                    <Square square={place} showP={true}/>
                </Link>
            ))}
        </div>

    );
}

export default PlaceList;
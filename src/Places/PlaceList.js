import './places.css';
import Square from '../shared/Square';

const PlaceList = ({ places }) => {
    return (
        <div className="placeList" >
            {places.map(place => (
                <Square
                    url={`/place/${place.id}`}
                    square={place}
                    showP={true}
                    kind={"placeList"}
                    key={place.id}
                />
            ))}
        </div>

    );
}

export default PlaceList;
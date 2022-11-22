import Square from "./Square";

const PlaceList = ( {places} ) => {
    return(
            <div className="placeList" >
            {places.map(place => (
                <Square square={place} key={place.id} />
            ))}
        </div>

    );
}

export default PlaceList;
import { useState, useEffect } from "react";
import Square from "./Square";

const PlaceList = () => {
    const [places, setPlaces] = useState(null);

    useEffect( () => {
        fetch('http://localhost:8000/places')
            .then( res =>  {
                return res.json();
            })
            .then ( data => {
                setPlaces(data);
            })
    },[]);

    return(
        <div className="squareList" >
            {places && places.map(square => (
                <Square square={square} key={square.id} />
            ))}
        </div>
    );
}

export default PlaceList;
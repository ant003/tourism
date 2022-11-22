import { useState, useEffect } from "react";
import PlaceList from "./PlaceList";

const Home = () => {
    const [places, setPlaces] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        fetch('http://localhost:8000/places')
            .then( res =>  {
                return res.json();
            })
            .then ( data => {
                setPlaces(data);
                setIsLoading(false);
            })
    },[]);

    return(
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {places && <PlaceList places={places}/>}
        </div>
    );
}

export default Home;
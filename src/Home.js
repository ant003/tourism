import { useState, useEffect } from "react";
import PlaceList from "./PlaceList";

const Home = () => {
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
        <div className="home">
            {places && <PlaceList places={places}/>}
        </div>
    );
}

export default Home;
import PlaceList from "./PlaceList";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data:places, isLoading, error} = useFetch('http://localhost:8000/places');

    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {places && <PlaceList places={places}/>}
        </div>
    );
}

export default Home;
import Carousel from './Carousel';
import './carousel.css';
import useFetch from '../customHooks/useFetch.js';
import Square from '../Places/Square';
import { Link } from "react-router-dom";

const Home = () => {
    const { data: places, isLoading, error } = useFetch('http://localhost:8000/places');

    let newPlaces = [];
    if (places) {
        for (let i = places.length - 1; i > places.length - 7; --i) {
            newPlaces.push(places[i]);
        }
    }
    return (
        <div className="home">
            <section id="standOuot">
                <h1>Lugar destacado</h1>
                {places && <p>{places[0].description}</p>}
            </section>
            <section id="standPhoto">
                {places &&
                    <Link to={`/place/${places[0].id}`} key={places[0].id}>
                        <Square square={places[0]} showP={false} />
                    </Link>
                }
            </section>
            <section id="newPlaces">
                <h2>Lugares nuevos</h2>
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                <Carousel size={3}>
                    {
                        newPlaces.map(place => {
                            return (
                                <Link to={`/place/${place.id}`} key={place.id}>
                                    <Square square={place} showP={false} />
                                </Link>);
                        })
                    }
                </Carousel>

            </section>
        </div>
    );
}

export default Home;
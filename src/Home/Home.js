import './home.css';
import Carousel from '../shared/Carousel';
import useFetch from '../customHooks/useFetch.js';
import Square from '../shared/Square';

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
                    <Square
                        url={`/place/${places[0].id}`}
                        square={places[0]}
                        showP={false}
                        kind={"carousel"}
                        key={places[0].id}
                    />
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
                                <Square
                                    url={`/place/${place.id}`}
                                    square={place}
                                    showP={false}
                                    kind={"carousel"}
                                    key={place.id}
                                />
                            );
                        })
                    }
                </Carousel>

            </section>
        </div>
    );
}

export default Home;
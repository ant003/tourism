import style from './home.module.css';
import Carousel from '../shared/Carousel/Carousel';
import useFetch from '../customHooks/useFetch.js';
import Square from '../shared/Square/Square';
const Home = () => {
    const { data: places, isLoading, error } = useFetch('http://localhost:8000/places');

    /**
     * Makes a "new places" list with the last
     * six places added to the page.
     */
    const placesToShow = 6;
    let newPlaces = [];
    if (places) {
        const totalOfPlaces = places.length - 1;

        for (let i = totalOfPlaces; i > totalOfPlaces - placesToShow; --i) {
            newPlaces.push(places[i]);
        }
    }

    return (
        <div className={style.home}>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}

            {
                /**
                 * Standout and standPhoto sections show
                 * a description and the photo for the outstanding 
                 * place which is the first place added in this case
                 */
            }
            <section className={style.standOuot}>
                <h1>Lugar destacado</h1>
                {places && <p>{places[0].description}</p>}
            </section>
            <section className={style.standPhoto}>
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
            {
                /**
                 * NewPlaces section shows a three slides
                 * carousel with the new places added to the page
                 * this are the ones on the list created at the
                 * beginning of this component
                 */
            }
            <section className={style.newPlaces}>
                <h2>Lugares nuevos</h2>
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
import styles from './place.module.css';
import { useParams } from 'react-router-dom';
import Banner from './Banner/Banner';
import Content from './Content/Content';
import useFetch from '../customHooks/useFetch';

const Place = () => {
    /**
     * titlesList contains the titles for each ones of
     * the sections that are displayed on the content
     * of the place page
     */
    const titlesList = ["Distancia:", "Experiencia:", "Dificultad:", "Vehículo:", "Precio:", "Descripción:", "", "", "", "", ""];
    /**
     * propertiesList contains the place object properties 
     * that will be displayed along with the 
     * corresponding title, as not all the place properties 
     * are needed to be displayed.
     */
    const propertiesList = ["distance", "experience", "difficulty", "vehicle", "price", "description", "p2", "p3", "p4", "p5"];

    /**
     * nameList and iconProperties are similar to
     * titlesList and propertiesList but they are
     * used in the banner instead of the content
     */
    const namesList = ["ri:dashboard-3-line", "ri:guide-line", "ri:car-fill", "ri:money-dollar-box-line"];
    const iconProperties = ["difficulty", "distance", "vehicle", "price"];

    const { id } = useParams();
    const { data: place, isLoading, error } = useFetch(`http://localhost:8000/places/${id}`);

    return (
        <div className={styles.place}>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {place && <Banner namesList={namesList} propertiesList={iconProperties} data={place} />}
            {place && <Content namesList={titlesList} propertiesList={propertiesList} data={place} />}
        </div>
    );
}

export default Place;
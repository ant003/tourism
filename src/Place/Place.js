import styles from './place.module.css';
import { useParams } from 'react-router-dom';
import Banner from './Banner/Banner';
import Content from './Content/Content';
import useFetch from '../customHooks/useFetch';

const Place = () => {
    const titleNames = ["Distancia:", "Experiencia:", "Dificultad:", "Vehículo:", "Precio:", "Descripción:", "", "", "", "", ""];
    const titleKeys = ["distance", "experience", "difficulty", "vehicle", "price", "description", "p2", "p3", "p4", "p5"];

    const iconNames = ["ri:dashboard-3-line", "ri:guide-line", "ri:car-fill", "ri:money-dollar-box-line"];
    const iconKeys = ["difficulty", "distance", "vehicle", "price"];

    const { id } = useParams();
    const { data: place, isLoading, error } = useFetch(`http://localhost:8000/places/${id}`);

    return (
        <div className={styles.place}>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {place && <Banner nameList={iconNames} keyList={iconKeys} dataList={place} />}
            {place && <Content propertiesNames={titleNames} titles={titleKeys} data={place} />}
        </div>
    );
}

export default Place;
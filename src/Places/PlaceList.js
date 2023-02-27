import styles from './places.module.css';
import Square from '../shared/Square/Square';

const PlaceList = ({ places }) => {
    return (
        <div className={styles.placeList} >
            {places.map(place => (
                <Square
                    url={`/place/${place.id}`}
                    square={place}
                    showP={true}
                    kind={"placeList"}
                    key={place.id}
                />
            ))}
        </div>

    );
}

export default PlaceList;
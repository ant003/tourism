import style from './square.module.css';
import { Link } from 'react-router-dom';
/**
 * This is a generic component its
 * a square with an image that is 
 * clickable.
 * It could be a carousel square or a place
 * square depending of the kind received by
 * param.
 */

const Square = ({ url, square, showP, kind }) => {

    let imageName = "noImage.png";
    if (square.imageName !== undefined) {
        imageName = square.imageName;
    }
    return (
        <div className={style[kind]}>
            <Link to={url}>
                <img src={require(`../../img/${imageName}`)} alt="noImage"></img>
                <h2>{square.name}</h2>
                {showP && <p>{`${square.experience} + ${square.vehicle} + ${square.price}`}</p>}
            </Link>
        </div>
    );
}

export default Square;
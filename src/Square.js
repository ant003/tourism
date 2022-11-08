import noImage from "./img/noImage.png";

const Square = ({square}) =>{
    return (
        <div className="square">
            <img src={noImage} alt="noImage"></img>
            <h2>{square.name}</h2>
            <p>{`${square.experience} + ${square.vehicle} + ${square.price}` }</p>
        </div>
    );
}

export default Square;
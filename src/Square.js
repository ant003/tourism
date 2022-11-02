import noImage from "./img/noImage.png";

const Square = () =>{
    return (
        <div className="square">
            <img src={noImage} alt="noImage"></img>
            <h2>Place 1</h2>
            <p>This is a lovely place</p>
        </div>
    );
}

export default Square;
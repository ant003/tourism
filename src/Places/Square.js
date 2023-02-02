const Square = ({square}) =>{

   let imageName = "noImage.png";
   
    if(square.imageName !== undefined){
        imageName = square.imageName;
    }

    return (
        <div className="square">
            <img src={require(`../img/${imageName}`)} alt="noImage"></img>
            <h2>{square.name}</h2>
            <p>{`${square.experience} + ${square.vehicle} + ${square.price}` }</p>
        </div>
    );
}

export default Square;
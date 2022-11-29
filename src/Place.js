import { useParams } from "react-router-dom";

const Place = () => {
    const { id } = useParams();

    return(
        <h1>Place - { id }</h1>
    );
}

export default Place;
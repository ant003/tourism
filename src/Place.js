import { useParams } from "react-router-dom";
import ContentList from "./ContentList";
import useFetch from "./useFetch";

const Place = () => {
    const nameList = ["Distancia:","Experiencia:","Dificultad:","Vehículo:","Precio:","Descripción:","","","","",""];
    const keyList = ["distance","experience","difficulty","vehicle","price","description","p2","p3","p4","p5"];
    const { id } = useParams();
    const { data:place, isLoading, error} = useFetch(`http://localhost:8000/places/${id}`);

    return(
        <div className="place">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <div className="banner">
                <div className="bannerCont">
                    <h1>{ place && place.name }</h1>
                    <p>Test</p>
                </div>
            </div>
            <div className="content">
                {place && <ContentList nameList={nameList} keyList={keyList} dataList={place}/>}
            </div>
        </div>
    );
}

export default Place;
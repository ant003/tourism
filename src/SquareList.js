import { useState } from "react";
import Square from "./Square";


const SquareList = () => {
    // eslint-disable-next-line
    const [squares, setSquares] = useState([
        {name:"Catarata Río Agrio", experience:"Catarata", distance:"5km-10km", vehicle:"Automóvil", difficulty:"Fácil", price:"₡5000", id:1},
        {name:"Catarata El Tigre", experience:"Catarata", distance:"5km-10km", vehicle:"4x4", difficulty:"Difícil", price:"Más de ₡5000", id:2},
        {name:"Papagayo", experience:"Playa", distance:"Menos de 5km", vehicle:"Automóvil", difficulty:"Fácil", price:"Gratis", id:3},
        {name:"Prusia", experience:"Montaña/PN", distance:"5km-10km", vehicle:"Automóvil", difficulty:"Medio", price:"Menos de ₡5000", id:4},
        {name:"Puerto", experience:"Playa", distance:"Menos de 5km", vehicle:"Automóvil", difficulty:"Fácil", price:"Gratis", id:5},
        {name:"PN Tapantí", experience:"PN", distance:"5km-10km", vehicle:"4x4", difficulty:"Difícil", price:"Menos de ₡5000", id: 6},
        {name:"Catarata Río Fortuna", experience:"PN", distance:"5km-10km", vehicle:"4x4", difficulty:"Difícil", price:"Menos de ₡5000", id:7},
        {name:"Jacó", experience:"Playa", distance:"Menos de 5km", vehicle:"Automóvil", difficulty:"Fácil", price:"Gratis",id:8},
        {name:"Tamarindo", experience:"Playa", distance:"Menos de 5km", vehicle:"Automóvil", difficulty:"Fácil", price:"Gratis", id:9},
        {name:"Bosque de la Hoja", experience:"Montaña/Picnic", distance:"Menos de 5km", vehicle:"Automóvil", difficulty:"Fácil", price:"Menos de ₡5000", id:10},
        {name:"Selva Madre", experience:"Montaña/Río/Pesca", distance:"5km-10km", vehicle:"4x4", difficulty:"Medio", price:"Menos de ₡5000", id:11},
        {name:"Flamingo", experience:"Playa", distance:"Menos de 5km", vehicle:"Automóvil", difficulty:"Fácil", price:"Gratis", id:12}
    ]);


    return(
        <div className="squareList" >
            {squares.map(square => (
                <Square square={square} key={square.id} />
            ))}
        </div>
    );
}

export default SquareList;
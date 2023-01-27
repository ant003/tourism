import { useState } from "react";
const Create = () => {
    const [name,setName] = useState('');
    const [experience, setExperience] = useState('Catarata');
    const [distance, setDistance] = useState('');
    const [vehicle, setVehicle] = useState('Automóvil');
    const [difficulty, setDifficulty] = useState('Fácil');
    const [price, setPrice] = useState('');
    const [province, setProvince] = useState('San José');
    const [description, setDescription] = useState('');
    const [coordenate, setCoordenate] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let array = coordenate.split(',');
        array = array.map((ele) => Number(ele));

        const place = {name,experience,distance,
            vehicle,difficulty,price,province,
            description,coordenate:array}
            setIsPending(true);
        
        fetch('http://localhost:8000/places', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(place)
        })
        .then(() => {
            setIsPending(false);
            console.log('New place added');
        })
    }

    return(
        <div className="create">
            <h2>Crear un nuevo lugar</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Experiencia</label>
                <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                >
                    <option value={"Catarata"}>Catarata</option>
                    <option value={"Playa"}>Playa</option>
                    <option value={"Montaña"}>Montaña</option>
                    <option value={"PN"}>PN</option>
                    <option value={"Picnic"}>Picnic</option>
                    <option value={"Río"}>Río</option>
                </select>
                <label>Distancia</label>
                <input
                    type="text"
                    required
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
                <label>Vehículo</label>
                <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                >
                    <option value={"Automóvil"}>Automóvil</option>
                    <option value={"4x4"}>4x4</option>
                </select>
                <label>Dificultad</label>
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option value={"Fácil"}>Fácil</option>
                    <option value={"Medio"}>Medio</option>
                    <option value={"Difícil"}>Difícil</option>
                </select>
                <label>Precio</label>
                <input
                    type="text"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Provincia</label>
                <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                >
                    <option value={"San José"}>San José</option>
                    <option value={"Alajuela"}>Alajuela</option>
                    <option value={"Cartago"}>Cartago</option>
                    <option value={"Heredia"}>Heredia</option>
                    <option value={"Guanacaste"}>Guanacaste</option>
                    <option value={"Puntarenas"}>Puntarenas</option>
                    <option value={"Limón"}>Limón</option>
                </select>
                <label>Descripción</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label>Coordenada</label>
                <input
                    type="text"
                    required
                    value={coordenate}
                    onChange={(e) => setCoordenate(e.target.value)}
                />
                {!isPending && <button>Add place</button>}
                {isPending && <button disabled>Adding place...</button>}
            </form>
        </div>
    );
}

export default Create;
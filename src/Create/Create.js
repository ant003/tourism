import style from './create.module.css';
import { useState } from 'react';
import InputElement from './InputElement';
import OptionsElement from './OptionsElement';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const [formValues, setFormValues] = useState({
        name: '',
        experience: 'Catarata',
        distance: '',
        vehicle: 'Automóvil',
        difficulty: 'Fácil',
        price: '',
        province: 'San José',
        description: '',
        coordenate: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let array = formValues.coordenate.split(',');
        array = array.map((ele) => Number(ele));

        const place = formValues;
        place.coordenate = array;
        setIsPending(true);

        fetch('http://localhost:8000/places', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(place)
        })
            .then(() => {
                setIsPending(false);
                console.log('New place added');
                history.push('/');
            })
    }

    return (
        <div className={style.create}>
            <h2>Crear un nuevo lugar</h2>
            <form onSubmit={handleSubmit}>
                <InputElement
                    labelName={"Nombre"} value={formValues.name} handler={handleChange} name={"name"}
                />
                <OptionsElement
                    labelName={"Experiencia"}
                    options={["Catarata", "Playa", "Montaña", "PN", "Picnic", "Río"]}
                    value={formValues.experience}
                    handler={handleChange}
                    name={"experience"}
                />
                <InputElement
                    labelName={"Distancia"} value={formValues.distance} handler={handleChange} name={"distance"}
                />
                <OptionsElement
                    labelName={"Vehículo"}
                    options={["Automóvil", "4x4"]}
                    value={formValues.vehicle}
                    handler={handleChange}
                    name={"vehicle"}
                />
                <OptionsElement
                    labelName={"Dificultad"}
                    options={["Fácil", "Medio", "Difícil"]}
                    value={formValues.difficulty}
                    handler={handleChange}
                    name={"difficulty"}
                />
                <InputElement
                    labelName={"Precio"} value={formValues.price} handler={handleChange} name={"price"}
                />
                <OptionsElement
                    labelName={"Provincia"}
                    options={["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"]}
                    value={formValues.province}
                    handler={handleChange}
                    name={"province"}
                />
                <label>Descripción</label>
                <textarea
                    required
                    value={formValues.description}
                    onChange={handleChange}
                    name={"description"}
                ></textarea>
                <InputElement
                    labelName={"Coordenadas"}
                    value={formValues.coordenate}
                    handler={handleChange}
                    name={"coordenate"}
                />
                {!isPending && <button>Add place</button>}
                {isPending && <button disabled>Adding place...</button>}
            </form>
        </div>
    );
}

export default Create;
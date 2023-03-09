import style from './create.module.css';
const CreateForm = ({ isPending, formValues, handleChange, handleSubmit }) => {
    return (
        <div className={style.create}>
            <h2>Crear un nuevo lugar</h2>
            <form onSubmit={handleSubmit}>
                <label>{"Nombre"}</label>
                <input
                    type="text"
                    required
                    value={formValues.name}
                    onChange={handleChange}
                    name={"name"}
                />

                <label>{"Experiencia"}</label>
                <select
                    value={formValues.experience}
                    onChange={handleChange}
                    name={"experience"}
                >
                    <option value={"Catarata"}>Catarata</option>
                    <option value={"Playa"}>Playa</option>
                    <option value={"Montaña"}>Montaña</option>
                    <option value={"PN"}>PN</option>
                    <option value={"Picnic"}>Picnic</option>
                    <option value={"Río"}>Río</option>
                </select>

                <label>{"Distancia"}</label>
                <input
                    type="text"
                    required
                    value={formValues.distance}
                    onChange={handleChange}
                    name={"distance"}
                />

                <label>{"Vehículo"}</label>
                <select
                    value={formValues.vehicle}
                    onChange={handleChange}
                    name={"vehicle"}
                >
                    <option value={"Automóvil"}>Automóvil</option>
                    <option value={"4x4"}>4x4</option>
                </select>

                <label>{"Dificultad"}</label>
                <select
                    value={formValues.difficulty}
                    onChange={handleChange}
                    name={"difficulty"}
                >
                    <option value={"Fácil"}>Fácil</option>
                    <option value={"Medio"}>Medio</option>
                    <option value={"Difícil"}>Difícil</option>
                </select>

                <label>{"Precio"}</label>
                <input
                    type="text"
                    required
                    value={formValues.price}
                    onChange={handleChange}
                    name={"price"}
                />

                <label>{"Provincia"}</label>
                <select
                    value={formValues.province}
                    onChange={handleChange}
                    name={"province"}
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
                    value={formValues.description}
                    onChange={handleChange}
                    name={"description"}
                ></textarea>

                <label>{"Coordenadas"}</label>
                <input
                    type="text"
                    required
                    value={formValues.coordenate}
                    onChange={handleChange}
                    name={"coordenate"}
                />

                {!isPending && <button>Añadir lugar</button>}
                {isPending && <button disabled>Adding place...</button>}
            </form>
        </div>
    )
}

export default CreateForm;
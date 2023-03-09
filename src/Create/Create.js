import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CreateForm from './CreateForm';
const Create = () => {
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    //Default values for the form
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

    /**
     * Called each time any of the values on the input are changed
     * It updates the values in the form state
     */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    /**
     * Called when the form button is clicked
     * Does a POST request to send the data to the json database
     */
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
        <CreateForm isPending={isPending}
            formValues={formValues}
            handleChange={handleChange}
            handleSubmit={handleSubmit} />
    );
}

export default Create;
import { useEffect, useState, useCallback } from 'react'; 
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Pizza = () => {
    const { id } = useParams(); 
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);

    
    const url = `http://localhost:5000/api/pizzas/${id.toLowerCase()}`;

    const getPizza = useCallback(async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Error: ${response.status} - ${response.statusText}`);
                throw new Error("Pizza no encontrada");
            }
            const pizzaData = await response.json();
            setPizza(pizzaData);
        } catch (error) {
            console.error("Error en la petición:", error);
            setError("No se pudo cargar la pizza.");
        }
    }, [url]); 

    useEffect(() => {
        getPizza();
    }, [getPizza]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!pizza) {
        return <div>Cargando...</div>;
    }

    return (
        <div className='d-flex flex-row justify-content-center'>
            <Card>
                <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>{pizza.desc}</Card.Text>
                    <Card.Text>Precio: ${pizza.price}</Card.Text>
                    <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Pizza;

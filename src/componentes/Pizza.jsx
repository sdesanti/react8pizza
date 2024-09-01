import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Pizza = () => {
    const [pizza, setPizza] = useState({});
    
    // URL de la API
    const url = "http://localhost:5000/api/pizzas/p001";
    const getPizza = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error al obtener los datos");
            }
            const pizzaData = await response.json();
            setPizza(pizzaData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getPizza();
    }, []);

    const styleCard = {
      width: "25%",
      height: "auto",
      margin: "40px 10px 8px 20px" 
    };

    const ingredientes = pizza.ingredients ? pizza.ingredients.join(", ") : "";

    return (
        <div className='d-flex flex-row justify-content-center'>
            <Card style={styleCard}>
                {/* Imagen de la pizza */}
                <Card.Img src={pizza.img} alt={pizza.name} className="pizza-image" />

                {/* Cuerpo de la tarjeta */}
                <div className="card-body">
                    <h2 className="pizza-name">{pizza.name}</h2>
                    <p className="pizza-price">${pizza.price}</p>
                    <ul className="pizza-ingredients">
                        {pizza.ingredients && pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <div className="d-flex flex-column align-items-center">
                        <Button className='bg-dark mb-2'>Añadir</Button>
                        <Button className='text-dark bg-white'>Ver más</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Pizza;
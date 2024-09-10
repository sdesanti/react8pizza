import { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import CardPizza from '../componentes/CardPizza';
import { useCart } from '../context/CartContext';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const { agregarAlCarrito } = useCart();

    const url = "http://localhost:5000/api/pizzas";

    const getPizzas = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error al obtener los datos");
            }
            const pizzasData = await response.json();
            setPizzas(pizzasData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <>
            <div className='principal-container'>
                <Header />
            </div>

            <div className="pizza-list">
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                        onAddToCart={() => agregarAlCarrito(pizza)}
                    />
                ))}
            </div>
        </>
    );
}

export default Home;

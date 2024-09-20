import { useEffect, useState} from 'react';
import Header from '../componentes/Header';
import CardPizza from '../componentes/CardPizza';
import { useCart } from '../context/CartContext';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [error, setError] = useState(null);
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
            setError("No se pudieron cargar las pizzas. Inténtalo de nuevo más tarde.");
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
                {error && <div>{error}</div>} 
                {pizzas.length === '0' ? ( 
                    <div>No hay pizzas disponibles.</div>
                ) : (
                    pizzas.map((pizza) => (
                        <CardPizza
                            key={pizza.id}
                            id={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                            onAddToCart={() => agregarAlCarrito(pizza)}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default Home;

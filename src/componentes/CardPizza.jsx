
import PropTypes from 'prop-types';

const CardPizza = ({ name, price, ingredients, img, onAddToCart }) => {
    return (
        <div className="card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{ingredients.join(', ')}</p>
            <p>Precio: ${price}</p>
            <button onClick={onAddToCart}>Añadir al carrito</button>
        </div>
    );
}


CardPizza.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default CardPizza;

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Botón de Bootstrap
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';  // Importar PropTypes

function CardPizza({ id, name, price, ingredients, img }) {
  const { agregarAlCarrito } = useCart();  // Usar el contexto

  return (
    <Card className="card">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{ingredients.join(', ')}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => agregarAlCarrito({ id, name, price, img, ingredients })}
        >
          Añadir al carrito
        </Button>
        <Link to={`/pizza/${id}`} className="btn btn-secondary mt-2">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

// Definición de PropTypes para validar las props
CardPizza.propTypes = {
  id: PropTypes.string.isRequired,           // 'id' es requerido y debe ser una cadena
  name: PropTypes.string.isRequired,         // 'name' es requerido y debe ser una cadena
  price: PropTypes.number.isRequired,        // 'price' es requerido y debe ser un número
  ingredients: PropTypes.arrayOf(            // 'ingredients' es un array de strings
    PropTypes.string
  ).isRequired,
  img: PropTypes.string.isRequired           // 'img' es requerido y debe ser una cadena
};

export default CardPizza;

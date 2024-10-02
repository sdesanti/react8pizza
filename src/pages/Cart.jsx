import { useCart } from '../context/CartContext';
import { useUser } from '../context/UsuarioContexto';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const Cart = () => {
  const { carrito, aumentarCantidad, disminuirCantidad, removerDelCarrito, calcularTotal, vaciarCarrito } = useCart();
  const { token } = useUser();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
          items: carrito,
          total: calcularTotal(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("Compra realizada con éxito. ¡Gracias por tu compra!");
        vaciarCarrito(); 
      } else {
        throw new Error("Error en el proceso de compra.");
      }
    } catch (error) {
      setError(error.message || "Ocurrió un error al procesar tu compra.");
    }
  };

  return (
    <div className="carrito pb-2">
      <Container className="cajaCarrito d-flex flex-column justify-content-center align-items-center">
        <h3 style={{ color: "#fff", textShadow: "0 0 10px #f4032b", paddingBottom: "1rem" }}>
          Tu Carrito de Compras
        </h3>

        {/* Mostrar mensajes de éxito o error */}
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Listado de pizzas en el carrito */}
        {carrito.map((pizza) => (
          <Row key={pizza.id} className="mb-3 border p-3 rounded d-flex justify-content-between align-items-center">
            <Col>
              <img src={pizza.img} alt={`Imagen de Pizza ${pizza.name}`} className="pizza-image" />
              <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h6>{pizza.name} ${pizza.price.toLocaleString()}</h6>
              </div>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <button className="btnCarrito" onClick={() => aumentarCantidad(pizza.id)}>➕</button>
              <button className="btnCarrito" onClick={() => disminuirCantidad(pizza.id)}>➖</button>
              <button className="btnCarrito" onClick={() => removerDelCarrito(pizza.id)}>Quitar</button>
            </Col>
          </Row>
        ))}

        {/* Mostrar total */}
        <h4 className="text-end w-100 m-2" style={{ color: "#03bcf4" }}>
          🍕 Total: ${calcularTotal().toLocaleString()}
        </h4>

        {/* Botón de pagar */}
        <Button 
          variant="primary" 
          disabled={!token || carrito.length === 0} 
          onClick={handleCheckout}
        >
          Pagar
        </Button>
      </Container>
    </div>
  );
};

export default Cart;

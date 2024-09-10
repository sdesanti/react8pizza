import { useCart } from '../context/useCart';
import { Container, Row, Col } from 'react-bootstrap';

const Cart = () => {
  const { carrito, aumentarCantidad, disminuirCantidad, removerDelCarrito, calcularTotal } = useCart();

  return (
    <div className="carrito pb-2">
      <Container className="cajaCarrito d-flex flex-column justify-content-center align-items-center">
        <h3 style={{ color: "#fff", textShadow: "0 0 10px #f4032b", paddingBottom: "1rem" }}>
          Tu Carrito de Compras
        </h3>

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

        <h4 className="text-end w-100 m-2" style={{ color: "#03bcf4" }}>
          🍕 Total: ${calcularTotal().toLocaleString()}
        </h4>
      </Container>
    </div>
  );
};

export default Cart;
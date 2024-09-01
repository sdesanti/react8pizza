import { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { data } from './pizzas';


const ItemCarrito = ({ pizza, aumentarCantidad, disminuirCantidad, removerDelCarrito }) => (
  <Row className="mb-3 border p-3 rounded d-flex justify-content-between align-items-center">
    <Col>
      <img
        src={pizza.img}
        alt={`Imagen de Pizza ${pizza.name}`}
        className="pizza-image"
      />
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h6>
          {pizza.name} {""} ${pizza.price.toLocaleString()}
        </h6>
      </div>
    </Col>
    <Col className="d-flex flex-column justify-content-center align-items-center">
      <div>
        <button className="btnCarrito" onClick={() => aumentarCantidad(pizza.id)}>➕</button>
        <button className="btnCarrito" onClick={() => disminuirCantidad(pizza.id)}>➖</button>
      </div>
      <button className="btnCarrito" onClick={() => removerDelCarrito(pizza.id)}>Quitar</button>
    </Col>
  </Row>
);

ItemCarrito.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  aumentarCantidad: PropTypes.func.isRequired,
  disminuirCantidad: PropTypes.func.isRequired,
  removerDelCarrito: PropTypes.func.isRequired,
};


const Cart = () => {
  const [pizzas] = useState(data);
  const [carrito, setCarrito] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  const manejarCerrar = () => setMostrar(false);
  const manejarMostrar = () => setMostrar(true);

  const agregarAlCarrito = (pizza) => {
    const pizzaExistente = carrito.find(item => item.id === pizza.id);
    if (pizzaExistente) {
      setCarrito(prevCarrito =>
        prevCarrito.map(item =>
          item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito(prevCarrito => [...prevCarrito, { ...pizza, cantidad: 1 }]);
    }
    manejarMostrar();
  };

  const removerDelCarrito = (pizzaId) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== pizzaId));
  };

  const aumentarCantidad = (pizzaId) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.id === pizzaId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (pizzaId) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.id === pizzaId && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

  return (
    <div className="carrito pb-2">
      <Container className="cajaCarrito d-flex flex-column justify-content-center align-items-center">
        <h3 style={{ color: "#fff", textShadow: "0 0 10px #f4032b", paddingBottom: "1rem" }}>
          Menú
        </h3>
        {pizzas.map((pizza) => (
          <Row
            key={pizza.id}
            className="mb-3 border p-3 rounded d-flex justify-content-between align-items-center"
          >
            <Col xs={12} md={12} lg={3}>
              <img
                src={pizza.img}
                alt={`Imagen de Pizza ${pizza.name}`}
                className="pizza-image"
              />
              <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h6>{pizza.name} {""} ${pizza.price.toLocaleString()}</h6>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
              <button className="btn" onClick={() => agregarAlCarrito(pizza)}>Agregar 🛒</button>
            </Col>
          </Row>
        ))}
      </Container>

      <Modal show={mostrar} onHide={manejarCerrar} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#03bcf4" }}>
            Carrito 🛒
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Container className="d-flex flex-column justify-content-center align-items-center">
            {carrito.map((pizza) => (
              <ItemCarrito
                key={pizza.id}
                pizza={pizza}
                aumentarCantidad={aumentarCantidad}
                disminuirCantidad={disminuirCantidad}
                removerDelCarrito={removerDelCarrito}
              />
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <h4 className="text-end w-100 m-2" style={{ color: "#03bcf4" }}>
            🍕 Total : ${calcularTotal().toLocaleString()}
          </h4>
          <Button variant="secondary" onClick={manejarCerrar}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={manejarCerrar}>
            Proceder al Pago
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;

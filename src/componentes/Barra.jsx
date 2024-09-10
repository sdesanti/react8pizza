import { useState } from 'react';
import { Navbar, Container, Nav, Button, Image, Form } from 'react-bootstrap';
import trozo from '../assets/img/trozo.png';
import carroCompra from '../assets/img/carroCompra.png';
import lockOpen from '../assets/img/lockOpen.png';
import lock from '../assets/img/lock.png';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Barra = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { calcularTotal } = useCart();
  const precioTotal = Intl.NumberFormat("de-DE").format(calcularTotal());

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Navbar expand="lg" className="bg-dark" variant='dark'>
      <Container>
        <Navbar.Brand className="text-white">Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="link"> <img src={trozo} alt="trozoPizza" /><Link to= "/">Home</Link></Nav.Link>

          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Button variant="link" className="text-white" onClick={handleLogout}>
                <Image src={lockOpen} alt="Profile" /><Link to="/profile">Profile</Link>
              </Button>
            ) : (
              <>
                <Button variant="link" className="text-white" onClick={handleLogin}>
                  <Image src={lock} alt="Login" /><Link to="/login">Login</Link>
                </Button>
                <Button variant="link" className="text-white">
                  <Image src={lock} alt="Register" /> <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-light" className="text-primary">
              <Image src={carroCompra} alt="Carrito de compras" /> Total: ${precioTotal}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Barra;
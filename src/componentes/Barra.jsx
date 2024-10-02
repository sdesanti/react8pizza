import { Navbar, Container, Nav, Button, Image, Form } from 'react-bootstrap';
import trozo from '../assets/img/trozo.png';
import carroCompra from '../assets/img/carroCompra.png';
import lockOpen from '../assets/img/lockOpen.png';
import lock from '../assets/img/lock.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UsuarioContexto';

const Barra = () => {
  const styles = 'text-white ms-3 text-decoration-none';
  const setActiveClass = ({ isActive }) => (isActive ? `active ${styles}` : `notactive ${styles}`);
  const { calcularTotal } = useCart();
  const { token, logout } = useUser();
  const navigate = useNavigate();  
  const precioTotal = Intl.NumberFormat("de-DE").format(calcularTotal());

  const handleLogout = () => {
    logout();  
    navigate('/login');  
  };

  return (
    <Navbar expand="lg" className="bg-dark" variant='dark'>
      <Container>
        <Navbar.Brand className="text-white">Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <NavLink className={setActiveClass} to="/"> 
              <img src={trozo} alt="trozoPizza"/> Home
            </NavLink>
          </Nav>
          <div className="d-flex">
            {token ? ( 
              <>
                <NavLink className={setActiveClass} to="/profile"> 
                  <Image src={lockOpen} alt="Profile" /> Profile
                </NavLink>
                <Button variant="link" className={styles} onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink className={setActiveClass} to="/login"> 
                  <Image src={lock} alt="Login" /> Login
                </NavLink>
                <NavLink className={setActiveClass} to="/register"> 
                  <Image src={lock} alt="Register" /> Register
                </NavLink>
              </>
            )}
          </div>
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

import Barra from './componentes/Barra.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home.jsx';
import Footer from './componentes/Footer.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Profile from './pages/Profile.jsx';
import Notfound from './pages/Notfound.jsx';
import Cart from './pages/Cart.jsx';
import Pizza from './pages/pizza/Pizza.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { UserProvider, useUser } from './context/UsuarioContexto.jsx';
import CardPizza from './componentes/CardPizza.jsx';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { token } = useUser(); 
  return token ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const AppRoutes = () => {
  const { token } = useUser();

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pizza' element={<CardPizza />} />
      <Route path='/pizza/:id' element={<Pizza />} />
      <Route path='/login' element={token ? <Navigate to="/" /> : <LoginPage />} />
      <Route path='/register' element={token ? <Navigate to="/" /> : <RegisterPage />} />
      <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Barra />
            <AppRoutes />
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  );
};

export default App;

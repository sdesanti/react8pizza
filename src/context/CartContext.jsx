import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (pizza) => {
    const pizzaExistente = carrito.find((item) => item.id === pizza.id);
    if (pizzaExistente) {
      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === pizza.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito((prevCarrito) => [...prevCarrito, { ...pizza, cantidad: 1 }]);
    }
  };

  const removerDelCarrito = (pizzaId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== pizzaId));
  };

  const aumentarCantidad = (pizzaId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === pizzaId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (pizzaId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
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
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        removerDelCarrito,
        aumentarCantidad,
        disminuirCantidad,
        calcularTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;

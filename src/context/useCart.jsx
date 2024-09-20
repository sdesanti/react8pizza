import { useContext } from 'react';
import CartContext from './CartContext';

// Hook personalizado para consumir el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};
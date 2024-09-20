import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); 

  const logout = () => {
    setToken(false); 
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,  
};

export const useUser = () => {
  return useContext(UserContext);
};
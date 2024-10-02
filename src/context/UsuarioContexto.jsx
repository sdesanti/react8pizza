import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [profile, setProfile] = useState(null); 

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, password
        }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();
      setToken(data.token);  
      setEmail(data.email);  
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, password
        }),
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();
      setToken(data.token);  
      setEmail(data.email);  
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const logout = () => {
    setToken(null);  
    setEmail(null);  
    setProfile(null);  
  };

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Error fetching profile");

      const data = await res.json();
      setProfile(data); 
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, logout, getProfile }}>
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

import React, {useState} from 'react';
import Barra from './componentes/Barra.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx';
import Footer from './componentes/Footer.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Profile from './pages/Profile.jsx';
import Notfound from './pages/Notfound.jsx';
import Cart from './pages/Cart.jsx';
import Pizza from './pages/pizza/Pizza.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Barra></Barra>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/pizza/p001' element={<Pizza></Pizza>}></Route>
          

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;

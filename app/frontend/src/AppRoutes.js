import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Vehicles from './pages/Vehicles';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Seller from './pages/Seller';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={ <Login /> } />
      <Route exact path='/register' element={ <Register /> } />
      <Route exact path='/vehicles' element={ <Vehicles /> } />
      <Route exact path='/vehicles/:id' element={ <Detail /> } />
      <Route exact path='/favorites' element={ <Favorites /> } />
      <Route exact path='/orders' element={ <Orders /> } />
      <Route exact path='/seller' element={ <Seller /> } />
      <Route exact path='/admin' element={ <Admin /> } />
      <Route exact path='*' element={ <NotFound /> } />
    </Routes>
  );
}

export default AppRoutes;

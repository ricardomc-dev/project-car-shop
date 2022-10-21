import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Vehicles from './pages/Vehicles';
import Detail from './pages/Detail';
import CustomerFavorites from './pages/CustomerFavorites';
import CustomerOrders from './pages/CustomerOrders';
import SellerOrders from './pages/SellerOrders';
import SellerVehicles from './pages/SellerVehicles';
import AdminManage from './pages/AdminManage';
import AdminConfig from './pages/AdminConfig';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={ <Login /> } />
      <Route exact path='/register' element={ <Register /> } />
      <Route exact path='/vehicles' element={ <Vehicles /> } />
      <Route exact path='/vehicles/:id' element={ <Detail /> } />
      <Route exact path='/customer/favorites' element={ <CustomerFavorites /> } />
      <Route exact path='/customer/orders' element={ <CustomerOrders /> } />
      <Route exact path='/seller/orders' element={ <SellerOrders /> } />
      <Route exact path='/seller/vehicles' element={ <SellerVehicles /> } />
      <Route exact path='/admin/manage' element={ <AdminManage /> } />
      <Route exact path='/admin/config' element={ <AdminConfig /> } />
      <Route exact path='*' element={ <NotFound /> } />
    </Routes>
  );
}

export default AppRoutes;

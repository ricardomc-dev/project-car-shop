import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

function SellerOrders() {
  const navigate = useNavigate();

  return(
    <>
      <Header />
      <h1>SellerOrders</h1>
    </>
  )
}

export default SellerOrders;

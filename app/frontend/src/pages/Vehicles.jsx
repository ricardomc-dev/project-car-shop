import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

function Vehicles() {
  const navigate = useNavigate();

  return(
    <>
      <Header />
      <h1>Vehicles</h1>
    </>
  )
}

export default Vehicles;

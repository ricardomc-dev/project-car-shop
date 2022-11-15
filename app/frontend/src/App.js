import React from 'react'
import './App.css';

import Routes from './AppRoutes';
import VehiclesProvider from './context/VehiclesProvider';

function App() {
  return (
    <VehiclesProvider>
      <Routes />
    </VehiclesProvider>
  );
}

export default App;

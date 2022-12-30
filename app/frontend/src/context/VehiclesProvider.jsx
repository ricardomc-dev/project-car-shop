import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import VehiclesContext from './VehiclesContext';
import { requestData, api } from '../services/requests';
import AuthContext from './AuthContext';

function VehiclesProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('');
  const [colorList, setColorList] = useState([]);
  const [vehiclesList, setVehiclesList] = useState([]);
  const [modelsList, setModelsList] = useState([]);
  // const { signOut } = useContext(AuthContext);
  // const [config, setCofig] = useState( { headers: '' } );

  
  useEffect(() => {
    const token = localStorage.getItem('user@token');
    console.log(token)
    // if (!token) return signOut();
    api.defaults.headers.common['Authorization'] = `${token}`;

    async function getModels() {
      const response = await requestData('/config/models')
      setModelsList(response);
    }
    async function getVehicles() {
      const response = await requestData('/vehicles')
      setVehiclesList(response);
    }
    getModels();
    getVehicles();
    console.log(vehiclesList)
  },[])



  const contextValue = {
    currentUser,
    setCurrentUser,
    colorList,
    setColorList,
    vehiclesList,
    modelsList,
    setModelsList
  }

  return (
    <VehiclesContext.Provider value={ contextValue }>
      {children}
    </VehiclesContext.Provider>
  )
}

VehiclesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VehiclesProvider;

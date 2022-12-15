import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VehiclesContext from './VehiclesContext';
// import { requestData } from '../services/requests';

function VehiclesProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('');
  const [colorList, setColorList] = useState([]);
  const [config, setCofig] = useState( { headers: '' } );

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'))
    setCofig( { headers: { authorization: token } } )
  },[])

  const contextValue = {
    currentUser,
    setCurrentUser,
    colorList,
    setColorList,
    config
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

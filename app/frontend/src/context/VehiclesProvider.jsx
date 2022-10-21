import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VehiclesContext from './VehiclesContext';

function VehiclesProvider(children) {

  const contextValue = {

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

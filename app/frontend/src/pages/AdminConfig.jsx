import React, { useContext, useEffect, useState  } from 'react';
import VehiclesContext from '../context/VehiclesContext';
import { createData, requestData } from '../services/requests';

function AdminConfig() {
  const { colorList, setColorList, config } = useContext(VehiclesContext)
  const [newColor, setNewColor] = useState('');
  // const [config, setCofig] = useState( { headers: '' } );

  
  useEffect(() => {
    async function apiColorRequest() {
      const response = await requestData('/config/colors', config)
      setColorList(response);
    }

    if(config.headers.authorization) {
      apiColorRequest()
    }
  }, [config])

  // useEffect(() => {
  //   const { token } = JSON.parse(localStorage.getItem('user'))
  //   setCofig( { headers: { authorization: token } } )
  //   apiColorRequest();
  // },[])


  const handleClick = async () => {
    try {
      const response = await createData('/config/colors', { colorName: newColor }, config )
      console.log(response);
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const handleInputChange = ({ target: { value } }) => {
    setNewColor(value);
  }

  console.log(colorList)


  return(
    <div>
      <h1>Admin Config</h1>
      <label>
        <input
          type="text"
          placeholder="insere uma cor"
          name="color"
          onChange={ handleInputChange }
          value={ newColor }
        />
        <span>password</span>
      </label>
      <button
      type="button"
      variant="success"
      onClick={ handleClick }
      >
        ENTER
      </button>
      <span>{ colorList[0].colorName }</span>
    </div>
  )
}

export default AdminConfig;

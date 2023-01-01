import {
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';
import { api, setToken, requestData } from '../services/requests';
import AppContext from './AppContext';


function AppProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [vehiclesList, setVehiclesList] = useState([]);
  const [filtedVehicles, setFiltedVehicles] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [modelsList, setModelsList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('user@token');
    if (!token) return signOut();
    setInformation(token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await api.post('/login', {
        email,
        password,
      });

      if (!data.error && data.token) {
        setInformation(data.token);
      } else {
        toast.warning('E-mail ou senha incorreto');
      }
    } catch (error) {
      toast.warning('E-mail ou senha incorreto');
    }
  }

  function setInformation(token) {
    const { name, role } = jwt_decode(token);
    console.log(name, role)
    setUser({
      token: token,
      name: name,
      role: role,
    });

    localStorage.setItem('user@token', token);
    localStorage.setItem('user@name', name);
    // setToken(token);
    if (role === 'administrator') {
      navigate('/admin/manage')
    } else if (role === 'seller') {
      navigate('/seller/orders')
    } else if (role === 'customer') {
      navigate('/vehicles')
    }
  }

  function signOut() {
    delete api.defaults.headers.common['Authorization'];

    localStorage.removeItem('user@token');
    localStorage.removeItem('user@name');

    setUser({});
    navigate('/');
  }

  useEffect(() => {
    const token = localStorage.getItem('user@token');
    if (!token) return signOut();
  api.defaults.headers.common['Authorization'] = `${token}`;

    async function getVehicles() {
      const response = await requestData('/vehicles')
      setVehiclesList(response);
    }
    getVehicles();
    console.log(vehiclesList)
  },[])

  useEffect(() => {
    setFiltedVehicles(vehiclesList)
  },[vehiclesList])

  const contextValue = {
    user,
    signIn,
    signOut,
    vehiclesList,
    setVehiclesList,
    filtedVehicles,
    setFiltedVehicles
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;

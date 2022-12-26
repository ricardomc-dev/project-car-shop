import {
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';
import api from '../services/requests';
import AuthContext from './AuthContext';


function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

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

      console.log(data)

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
    api.defaults.headers.common['Authorization'] = `${token}`;
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

  const contextValue = {
    user,
    signIn,
    signOut
  }

  return (
    <AuthContext.Provider value={ contextValue }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
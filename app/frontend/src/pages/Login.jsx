import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../services/requests';

function Login() {
  const navigate = useNavigate();
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
  });

  const handleClick = async () => {
    const user = {
      email: inputState.email,
      password: inputState.password,
    };
    try {
      const login = await requestLogin('/login', user)
      localStorage.removeItem('user'); // limpando localStorage
      localStorage.setItem('user', JSON.stringify(login));
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = ({ target: { name, value } }) => {
    setInputState( { ...inputState, [name]: value});
  }

  return(
    <div>
        <label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={ handleInputChange }
            value={ inputState.email }
          />
          <span>email</span>
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={ handleInputChange }
            value={ inputState.password }
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
    </div>
  )
}

export default Login;

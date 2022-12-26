import React, { useContext } from 'react';
import logoCar from '../assets/logocar.png'
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { BsSuitHeartFill } from 'react-icons/bs'
// import { Avatar } from '../Avatar';

export function Header() {
  const { signOut, user } = useContext(AuthContext)
  const name = localStorage.getItem('user@name');

  return (
    <div className="w-full bg-green-900">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto px-16 py-0">
        <Link to="/vehicles">
          <img src={logoCar} width="150" alt="Logo do Carro" />
        </Link>
        <div className="flex items-center gap-4">
          {user.role === "customer"? 
          <Link to="/customer/favorites" className='text-white text-lg hover:text-2xl'>
            <BsSuitHeartFill />
          </Link> : null}
          <div className="flex flex-col">
            <p className="text-white">
              Olá, <span>{name}</span>
            </p>
            <div className="flex items-center gap-2 justify-end text-orange-400 cursor-pointer">
              <p onClick={signOut}>sair </p> <FiLogOut />
            </div>
          </div>
          {/* <Avatar /> */}
        </div>
      </div>
    </div>
  );
}
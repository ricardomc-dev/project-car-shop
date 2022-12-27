import React, { useState, useContext } from 'react';
import { FiLock, FiMail, FiSend } from 'react-icons/fi';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import carShopLogo from '../assets/classic-car-shop-logo.png';
import { CustomInput } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const loginSchema = object({
  email: string().required('E-mail obrigatório').email('E-mail inválido'),
  password: string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
}).required();

function Login() {
  const { signIn } = useContext(AuthContext)

  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (dataForm) => {
    signIn(dataForm);
  };

  function showPassword() {
    setIsShowingPassword(!isShowingPassword);
  }

  return (
    <div className="flex h-screen">
      <div className="md:hidden mt-20 lg:flex flex-1 flex-col justify-between items-center">
        <img
          className="lg:w-[70%] xl:w-[70%]"
          src={carShopLogo}
          alt="Placa Car shop atrás de carro antigo"
        />
      </div>
      <div className="md:w-2/5 lg:max-w-2xl flex flex-col items-center p-16 bg-green-900">
        
        <div className="sm:hidden xl:block bg-green w-full h-px mb-12"></div>
        <h1 className="text-6xl mb-6 text-white">Login</h1>
        <form
          autoComplete="off"
          autoCapitalize="off"
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            label="E-mail"
            Icon={FiMail}
            {...register('email')}
            error={errors.email}
          />
          <CustomInput
            isPassword
            label="Senha"
            type={isShowingPassword ? 'text' : 'password'}
            Icon={FiLock}
            {...register('password')}
            error={errors.password}
            showPassword={showPassword}
            isShowingPassword={isShowingPassword}
          />

          <div className="text-white flex items-center justify-between">
            <div>
              <p>Ainda não tem conta?</p>
              <Link to="/register" className="text-green hover:text-green">
                Crie agora
              </Link>
            </div>
            <Button title="Entrar" icon={<FiSend />} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

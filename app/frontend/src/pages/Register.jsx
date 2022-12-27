import { useState } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiSave, FiUser } from 'react-icons/fi';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import carShopLogo from '../assets/classic-car-shop-logo.png';
import { CustomInput } from '../components/Input';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/requests';
import { toast } from 'react-toastify';

const registerSchema = object({
  name: string().required('Nome obrigatório'),
  email: string().required('E-mail obrigatório').email('E-mail inválido'),
  password: string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
}).required();

function Register() {
  const navigate = useNavigate();
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async ({ name, email, password }) => {
    try {
      const { status } = await api.post('/register', {
        name,
        email,
        password,
        role: 'customer'
      });
      if (status === 201) {
        toast.success('Usuário criado com sucesso');
        navigate('/');
      }
    } catch (error) {
      console.log(error);

      toast.warning(error.response.data.error);
    }
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
        <h1 className="text-6xl mb-6 text-white">Cadastrar</h1>
        <form
          autoComplete="off"
          autoCapitalize="off"
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            label="Nome"
            Icon={FiUser}
            {...register('name')}
            error={errors.name}
          />
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

          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-white hover:text-green flex items-center"
            >
              <FiArrowLeft className="mr-2" />
              voltar
            </Link>
            <Button title="Cadastrar" icon={<FiSave />} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

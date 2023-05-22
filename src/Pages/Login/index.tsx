import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ReactComponent as BannerImage } from 'assets/images/Banner.svg';
import Input from 'components/Input';

import './styles.css';

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const onSubmit = (formData: FormData) => {
    console.log(formData.email);
    console.log(formData.password);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div className="image-login">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <BannerImage />
      </div>

      <div className="card-login">
        <h1 className="login-title">LOGIN</h1>

        <input
          {...register('email', {
            required: 'Campo obrigatório',
          })}
          type="text"
          className={`input-default form-control base-input ${
            errors.password ? 'is-invalid' : ''
          }`}
          placeholder="Email"
          name="email"
        />

        <input
          {...register('password', {
            required: 'Campo obrigatório',
          })}
          type="password"
          className={`input-default form-control base-input ${
            errors.password ? 'is-invalid' : ''
          }`}
          placeholder="Password"
          name="password"
        />

        <button type="submit" className="btn-login2">
          FAZER LOGIN
        </button>
      </div>
    </form>
  );
};

export default Login;

import { useForm } from 'react-hook-form';
import { ReactComponent as BannerImage } from 'assets/images/Banner.svg';

import './styles.css';
import { requestBackendLogin } from 'util/request';
import { saveAuthData } from 'util/storage';
import { useHistory } from 'react-router-dom';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {

        console.info('autenticado!');
        saveAuthData(response.data);
        history.push("/movies");
      })
      .catch((error) => {
        console.info('erro de autenticação');
      });
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
          {...register('username', {
            required: 'Campo obrigatório',
          })}
          type="text"
          className={`input-default form-control base-input ${
            errors.password ? 'is-invalid' : ''
          }`}
          placeholder="Email"
          name="username"
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

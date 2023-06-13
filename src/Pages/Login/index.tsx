import { useForm } from 'react-hook-form';
import { ReactComponent as BannerImage } from 'assets/images/Banner.svg';
import { useContext, useState } from 'react';
import { requestBackendLogin } from 'util/request';
import { saveAuthData } from 'util/storage';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'util/AuthContext';
import { getTokenData } from 'util/auth';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const history = useHistory();

  const [hasError, setHasError] = useState(false);

  const { setAuthContextData } = useContext(AuthContext);

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });

        history.push('/movies');
      })
      .catch((error) => {
        setHasError(true);
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

        {hasError && (
          <div className="alert">Erro ao tentar efetuar o login</div>
        )}

        <input
          {...register('username', {
            required: 'Campo obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido',
            },
          })}
          type="text"
          className={`form-control base-input ${
            errors.username ? 'is-invalid' : ''
          }`}
          placeholder="Email"
          name="username"
        />
        <div className="invalid-feedback d-block">
          {errors.username?.message}
        </div>

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
        <div className="invalid-feedback d-block">
          {errors.password?.message}
        </div>

        <button type="submit" className="btn-login2">
          FAZER LOGIN
        </button>
      </div>
    </form>
  );
};

export default Login;

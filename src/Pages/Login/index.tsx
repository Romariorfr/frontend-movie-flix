import Input from 'components/Input';
import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as BannerImage } from 'assets/images/Banner.svg';

const Login = () => {
  const inputEvent = () => {};

  return (
    <div className="container">
      <div className="image-login">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <BannerImage />
      </div>

      <div className="card-login">
        <h1 className="login-title">LOGIN</h1>
        <Input value="Email" onChange={inputEvent} />
        <Input value="Senha" onChange={inputEvent} />
        <Link to="/movies">
          <button className="btn-login2">FAZER LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

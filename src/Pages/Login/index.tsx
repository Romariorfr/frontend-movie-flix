import Input from '../../Components/Input';
import './styles.css';

const Login = () => {

  const inputEvent = () => {};

  return (
    <div className="login-container">
      <h1 className='login-title'>LOGIN</h1>
      <Input value="Email" onChange={inputEvent} />
      <Input value="Senha" onChange={inputEvent} />
      <button className='btn-login'>FAZER LOGIN</button>
    </div>
  );
};

export default Login;

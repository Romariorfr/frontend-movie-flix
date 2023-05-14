import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Movie Flix</h1>
      </Link>
      <button className="btn-sair">Sair</button>
    </div>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import './styles.css';

const Movies = () => {
  return (
    <div className="movie-container">
      <h1>Tela de listagem de filmes</h1>
      <Link to="/movies/1">
        <h3>Acessar/movies/1</h3>
      </Link>
      <Link to="/movies/2">
        <h3>Acessar/movies/2</h3>
      </Link>
    </div>
  );
};

export default Movies;

import { Link } from 'react-router-dom';
import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { ReactComponent as Movie1 } from 'Assets/images/image1.svg';

const Movies = () => {
  const { control } = useForm();

  const options = [
    'Ação',
    'Aventura',
    'Comédia',
    'Drama',
    'Ficção Científica',
    'Romance',
    'Suspense',
    'Terror',
  ];

  return (
    <div className="movie-container">
      <div className="genre-filter-container">
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={options.map((category) => ({
                value: category,
                label: category,
              }))}
              placeholder="Categorias"
              isClearable
              isSearchable
              classNamePrefix={'category-filter-select'}
            />
          )}
        />
      </div>

      <Link to="/movies/1">
        <div className="movie-card-container">
          <Movie1 />
          <div className="movie-card-titles">
            <h3>O Retorno do Rei</h3>
            <h5>2013</h5>
            <h6>O olho do inimigo está se movendo.</h6>
          </div>
        </div>
      </Link>
      <Link to="/movies/2">
        <div className="movie-card-container">
          <Movie1 />
          <div className="movie-card-titles">
            <h3>O Retorno do Rei</h3>
            <h5>2013</h5>
            <h6>O olho do inimigo está se movendo.</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movies;

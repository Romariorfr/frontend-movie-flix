import Input from 'components/Input';
import './styles.css';
import { ReactComponent as Estrela } from 'assets/images/Star.svg';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { requestBackend } from 'util/request';
import { AxiosRequestConfig } from 'axios';

type urlParams = {
  movieId: string;
};

type Review = {
  id: number;
  text: string;
  movieId: number;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

const MoviesId = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const { movieId } = useParams<urlParams>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  return (
    <div className="movieid-container">
      <h1>Tela de detalhes do filme id:{movieId}</h1>
      <div className="avaliacao-card">
        <Input value="Deixe sua avaliação aqui" onChange={() => {}} />
        <button className="btn-login">SALVAR AVALIAÇÃO</button>
      </div>
      <div className="comentario-container">
        {reviews.map((review) => (
          <div key={review.id} className="comentario-card">
            <div className="topo-comentario">
              <Estrela />
              <h4>{review.user.name}</h4>
            </div>
            <div className="corpo-comentario">
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesId;

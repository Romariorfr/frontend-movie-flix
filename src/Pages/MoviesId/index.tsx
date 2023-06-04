import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';

import { ReactComponent as Estrela } from 'assets/images/Star.svg';
import { requestBackend } from 'util/request';

import Input from 'components/Input';

import './styles.css';

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

  const [avaliation, setAvaliation] = useState('');

  const handleAvaliationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAvaliation(event.target.value);
  };

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
        <Input value={avaliation} onChange={handleAvaliationChange}/>
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

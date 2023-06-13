import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { ReactComponent as Estrela } from 'assets/images/Star.svg';
import { requestBackend } from 'util/request';

import { getAuthData } from 'util/storage';
import { hasAnyRoles } from 'util/auth';

import './styles.css';

type urlParams = {
  movieId: string;
};

type FormData = {
  avaliation: string;
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
  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    fetchReviews();
  });

  const fetchReviews = async () => {
    const response = await requestBackend({
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    });
    setReviews(response.data);
  };

  const submitReview = async (data: FormData) => {
    const config = {
      method: 'POST',
      url: '/reviews',
      data: {
        text: data?.avaliation,
        movieId: movieId,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuthData().access_token}`,
      },
    };

    await requestBackend(config);
    reset();
    fetchReviews();
  };

  return (
    <form onSubmit={handleSubmit(submitReview)}>
      <div className="movieid-container">
        <h1>Tela de detalhes do filme id:{movieId}</h1>
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <div className="avaliacao-card">
            <input
              {...register('avaliation')}
              className="input-default form-control base-input"
              placeholder="Deixe sua avaliação aqui"
            />
            <button className="btn-login">SALVAR AVALIAÇÃO</button>
          </div>
        )}
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
    </form>
  );
};

export default MoviesId;

import Input from '../../Components/Input';
import './styles.css';

const MoviesId = () => {
  return (
    <div className="movieid-container">
      <h1>Tela de detalhes do filme</h1>
      <h1>id:1</h1>
      <div className="avaliacao-card">
        <Input value="Deixe sua avaliação aqui" onChange={() => {}} />
        <button className="btn-login">SALVAR AVALIAÇÃO</button>
      </div>
    </div>
  );
};

export default MoviesId;

import Input from 'components/Input';
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
      <div className="comentario-container">
        <div className="comentario-card">
          <div className="topo-comentario">
            <h4>*</h4>
            <h4>Maria Silva</h4>
          </div>
          <div className="corpo-comentario">
            <p>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
          </div>
        </div>

        <div className="comentario-card">
          <div className="topo-comentario">
            <h4>*</h4>
            <h4>Maria Silva</h4>
          </div>
          <div className="corpo-comentario">
            <p>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
          </div>
        </div>

        <div className="comentario-card">
          <div className="topo-comentario">
            <h4>*</h4>
            <h4>Maria Silva</h4>
          </div>
          <div className="corpo-comentario">
            <p>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
          </div>
        </div>

        <div className="comentario-card">
          <div className="topo-comentario">
            <h4>*</h4>
            <h4>Maria Silva</h4>
          </div>
          <div className="corpo-comentario">
            <p>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesId;
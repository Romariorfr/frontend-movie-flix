import Input from 'components/Input';
import './styles.css';
import { ReactComponent as Estrela } from 'assets/images/Star.svg';

const MoviesId = () => {
  return (
    <div className="movieid-container">
      <h1>Tela de detalhes do filme id:1</h1>
      <div className="avaliacao-card">
        <Input value="Deixe sua avaliação aqui" onChange={() => {}} />
        <button className="btn-login">SALVAR AVALIAÇÃO</button>
      </div>
      <div className="comentario-container">
        <div className="comentario-card">
          <div className="topo-comentario">
            <Estrela/>
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
          <Estrela/>
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
          <Estrela/>
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
          <Estrela/>
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

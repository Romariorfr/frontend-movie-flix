import { Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'util/PrivateRoute';
import Header from 'components/Header';
import Login from 'pages/Login';
import Movies from 'pages/Movies';
import MoviesId from 'pages/MoviesId';
import history from 'util/history';

//devo criar uma função para verificar se o usuario está autenticado e como resposta retorne um boleano
//repasso a função como resposta em isAuthenticated

const Routes = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <PrivateRoute
        path="/movies"
        exact
        component={Movies}
        isAuthenticated={true}
      />
      <PrivateRoute
        path="/movies/1"
        exact
        component={MoviesId}
        isAuthenticated={false}
      />
      <PrivateRoute
        path="/movies/2"
        exact
        component={MoviesId}
        isAuthenticated={false}
      />
    </Switch>
  </Router>
);

export default Routes;

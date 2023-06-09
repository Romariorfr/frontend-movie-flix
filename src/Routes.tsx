import { Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'util/PrivateRoute';
import Header from 'components/Header';
import Login from 'pages/Login';
import Movies from 'pages/Movies';
import MoviesId from 'pages/MoviesId';
import history from 'util/history';
import { isAuthenticated } from 'util/auth';

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
        isAuthenticated={isAuthenticated()}
      />
      <PrivateRoute
        path="/movies/:movieId"
        exact
        component={MoviesId}
        isAuthenticated={isAuthenticated()}
      />
    </Switch>
  </Router>
);

export default Routes;

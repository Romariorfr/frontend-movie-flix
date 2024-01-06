import { Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'util/PrivateRoute';
import Header from 'Components/Header';
import Login from 'Pages/Login';
import Movies from 'Pages/Private/Movies';
import MoviesId from 'Pages/Private/MoviesId';
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

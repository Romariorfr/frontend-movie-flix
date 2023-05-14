import Header from 'components/Header';
import Login from 'pages/Login';
import Movies from 'pages/Movies';
import MoviesId from 'pages/MoviesId';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/1" exact>
        <MoviesId />
      </Route>
      <Route path="/movies/2" exact>
        <MoviesId />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

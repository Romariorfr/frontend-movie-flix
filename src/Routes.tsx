import Header from 'components/Header';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

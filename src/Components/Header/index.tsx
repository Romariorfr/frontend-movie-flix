import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'util/AuthContext';
import { removeAuthData } from 'util/storage';
import { getTokenData, isAuthenticated } from 'util/auth';
import history from 'util/history';

import './styles.css';

const Header = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>Movie Flix</h1>
      </Link>
      {authContextData.authenticated ? (
        <button className="btn-sair" onClick={handleLogoutClick}>
          Sair
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;

import Routes from './Routes';
import { AuthContext, AuthContextData } from 'util/AuthContext';
import { useState } from 'react';
import 'assets/styles/custom.scss';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;

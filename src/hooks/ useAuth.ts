import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';


const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL || 'http://localhost:8080/auth',
  realm: process.env.REACT_APP_KEYCLOAK_REALM || 'your-realm',
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || 'your-client-id',
});

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeKeycloak = async () => {
      try {
        await keycloak.init({ onLoad: 'login-required' });
        setAuthenticated(keycloak.authenticated);
      } catch (err) {
        setError('Failed to initialize Keycloak');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    initializeKeycloak();
  }, []);

  const login = () => {
    keycloak.login();
  };

  const logout = () => {
    keycloak.logout();
  };

  const getToken = () => {
    return keycloak.token;
  };

  return {
    authenticated,
    loading,
    error,
    login,
    logout,
    getToken,
  };
};

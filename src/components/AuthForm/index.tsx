import { useEffect, useState } from 'react';
import { signIn, signUp, signOutUser } from '@/firebase';
import { useAuth } from '@contexts/AuthContext';
import { useTranslation } from 'react-i18next';

import GoogleSignInButton from '@/components/GoogleSignInButton';

const AuthForm = () => {
  const { t } = useTranslation('general');
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const showLoginRegisterForm = false;

  const { currentUser } = useAuth() ?? { currentUser: null };

  useEffect(() => {
    if (currentUser) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [currentUser]);

  const _login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signIn(username, password);
    } catch (error) {
      console.error(error);
    }
  };

  const _register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signUp(username, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isLogin && (
        <button onClick={signOutUser} className="logout-button mb-5">
          {t('logout')}
        </button>
      )}
      {!isLogin && (
        <>
          {showLoginRegisterForm && (
            <form className="is-flex-column">
              <input
                type="text"
                className="mb-5"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="password"
                className="mb-5"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button type="submit" onClick={_login} className="mb-5">
                {t('login')}
              </button>
              <button type="submit" onClick={_register} className="mb-5">
                {t('register')}
              </button>
            </form>
          )}
          <GoogleSignInButton />
        </>
      )}
    </>
  );
};

export default AuthForm;

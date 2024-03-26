import { useEffect, useState } from 'react';
import { signIn, signUp, signOutUser, authUser } from '@/firebase';

import GoogleSignInButton from '@/components/GoogleSignInButton';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = authUser.currentUser;

  useEffect(() => {
    if (user) {
      setIsLogin(true);
      console.log(user);
    }
  }, [user]);

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
        <button onClick={signOutUser} className="mb-5">
          Logout
        </button>
      )}
      {!isLogin && (
        <>
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
              Login
            </button>
            <button type="submit" onClick={_register} className="mb-5">
              Register
            </button>
          </form>
          <GoogleSignInButton />
        </>
      )}
    </>
  );
};

export default AuthForm;

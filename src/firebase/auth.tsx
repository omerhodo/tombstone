import { auth } from './firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { notify } from '@components/Toastify';

const authUser = getAuth();
const { t } = useTranslation('general');

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      notify(t('registerSuccess'));
    })
    .catch((error) => {
      notify(t('error'));
      console.log(error.message);
    });
};

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      notify(t('loginSuccess'));
    })
    .catch((error) => {
      notify(t('error'));
      console.log(error.message);
    });
};

const signOutUser = () => {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {
      notify(t('logoutSuccess'));
    })
    .catch((error) => {
      notify(t('error'));
      console.log(error.message);
    });
};

export { authUser, signIn, signUp, signOutUser };

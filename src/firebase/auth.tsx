import { auth } from './firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import i18n from 'i18next';
import { notify } from '@components/Toastify';

const authUser = getAuth();

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // notify(i18n.t('registerSuccess'));
      notify(i18n.t('Mezarlığa kayıt başarılı'));
    })
    .catch((error) => {
      notify(i18n.t('error'));
      console.log(error.message);
    });
};

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // notify(i18n.t('Mezarlığa giriş başarılı'));
      notify(i18n.t('loginSuccess'));
    })
    .catch((error) => {
      // notify(i18n.t('Hatayla karşılaşıldı'));
      notify(i18n.t('error'));
      console.log(error.message);
    });
};

const signOutUser = () => {
  return signOut(auth)
    .then(() => {
      notify(i18n.t('logoutOkay'));
    })
    .catch((error) => {
      notify(i18n.t('error'));
      console.log(error.message);
    });
};

export { authUser, signIn, signUp, signOutUser };

import { auth } from './firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { notify } from '@components/Toastify';

const authUser = getAuth();

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      notify('Kayıt başarılı');
    })
    .catch((error) => {
      notify('Bir hata oluştu.');
      console.log(error.message);
    });
};

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      notify('Giriş başarılı');
    })
    .catch((error) => {
      notify('Bir hata oluştu.');
      console.log(error.message);
    });
};

const signOutUser = () => {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {
      notify('Çıkış başarılı');
    })
    .catch((error) => {
      notify('Bir hata oluştu.');
      console.log(error.message);
    });
};

export { authUser, signIn, signUp, signOutUser };

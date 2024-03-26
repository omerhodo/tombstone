import { auth } from './firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const authUser = getAuth();

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = () => {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {
      console.log('Oturum kapatıldı');
    })
    .catch((error) => {
      console.error('Oturum kapatma hatası', error);
    });
};

export { authUser, signIn, signUp, signOutUser };

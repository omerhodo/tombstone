import { auth } from './firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export { signIn, signUp };

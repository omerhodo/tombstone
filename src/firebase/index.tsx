import { signIn, signUp, signOutUser, authUser } from './auth';
import { sendData } from './sendData';
import { auth, db } from './firebase-config';

export { auth, signIn, signUp, signOutUser, authUser, db, sendData };

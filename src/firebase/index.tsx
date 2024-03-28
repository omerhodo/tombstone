import { signIn, signUp, signOutUser, authUser } from './auth';
import { sendData, approveData } from './sendData';
import { removeData } from './removeData';
import { getData, getUserByEmail } from './getData';
import { auth, db } from './firebase-config';

export {
  auth,
  signIn,
  signUp,
  signOutUser,
  authUser,
  db,
  sendData,
  getData,
  getUserByEmail,
  approveData,
  removeData,
};

import { useEffect, useState } from 'react';
import { auth, db } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import GoogleSvg from '@/assets/images/svg/google.svg';

interface UserInfo {
  userName: string | null;
  email: string | null;
  role: string;
  createdAt: Date;
}

const GoogleSignInButton = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const sendDataToFirestore = async () => {
      if (userInfo) {
        const userRef = doc(db, 'users', userInfo.email);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          await setDoc(userRef, userInfo);
        }
      }
    };

    sendDataToFirestore();
  }, [userInfo]);

  const createUser = async (user: any) => {
    const { displayName, email, metadata } = user;
    const { creationTime } = metadata;

    const newUserInfo = {
      userName: displayName,
      email,
      role: 'user',
      createdAt: new Date(creationTime),
    };

    setUserInfo(newUserInfo);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        createUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <img
      className="google-button"
      src={GoogleSvg}
      alt="Google Logo"
      onClick={signInWithGoogle}
    />
  );
};

export default GoogleSignInButton;

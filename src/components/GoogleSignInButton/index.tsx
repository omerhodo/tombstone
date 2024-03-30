import { useEffect, useState } from 'react';
import { auth, db } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { notify } from '@components/Toastify';
import { useTranslation } from 'react-i18next';

import GoogleSvg from '@/assets/images/svg/google.svg';

interface UserInfo {
  userName: string | null;
  email: string | null;
  role: string;
  createdAt: Date;
}

const GoogleSignInButton = () => {
  const { t } = useTranslation('general');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const sendDataToFirestore = async () => {
      if (userInfo && userInfo.email) {
        const userRef = doc(db, 'users', userInfo.email);
        try {
          const userSnap = await getDoc(userRef);
          notify(t('welcomeSite'));
          if (!userSnap.exists()) {
            await setDoc(userRef, userInfo);
          }
        } catch (error) {
          console.error(error);
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

import { auth } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { sendData } from '@/firebase';

import GoogleSvg from '@/assets/images/svg/google.svg';

const GoogleSignInButton = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        sendData('users', {
          userName: result.user.displayName,
          email: result.user.email,
          createdAt: new Date(),
        });
        console.log(result.user);
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

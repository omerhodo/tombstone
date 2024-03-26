// src/components/GoogleSignInButton.js
import { auth } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleSignInButton = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google ile giriş başarılı
        console.log(result.user);
      })
      .catch((error) => {
        // Hata işleme
        console.error(error);
      });
  };

  return <button onClick={signInWithGoogle}>Google ile Giriş Yap</button>;
};

export default GoogleSignInButton;

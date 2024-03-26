import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';

interface MessageData {
  userName?: string | null;
  email?: string | null;
  content: string;
  createdAt?: Date;
}

const sendData = async (
  type: string,
  { userName, email, content, createdAt }: MessageData
) => {
  try {
    await addDoc(collection(db, type), {
      userName: userName,
      email: email,
      content: content,
      createdAt: createdAt,
    });
  } catch (error) {
    console.error('Db erişimde hata oluştu: ', error);
  }
};

export { sendData };

import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';

interface MessageData {
  userName?: string | null;
  content: string;
  [key: string]: any;
}

const sendData = async (
  type: string,
  { userName, content, ...rest }: MessageData
) => {
  try {
    await addDoc(collection(db, type), {
      userName: userName,
      content: content,
      createdAt: new Date(),
      ...rest,
    });
  } catch (error) {
    console.error('Db erişimde hata oluştu: ', error);
  }
};

export { sendData };

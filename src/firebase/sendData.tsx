import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';

interface MessageData {
  userName?: string | null;
  email?: string | null;
  content?: string;
  role?: string;
  createdAt?: Date;
}

const sendData = async (
  type: string,
  { userName, email, content, createdAt, role }: MessageData
) => {
  const docData = Object.fromEntries(
    Object.entries({ userName, email, content, role, createdAt }).filter(
      ([_, value]) => value !== undefined
    )
  );

  try {
    await addDoc(collection(db, type), docData);
  } catch (error) {
    console.error('Db erişimde hata oluştu: ', error);
  }
};

export { sendData };

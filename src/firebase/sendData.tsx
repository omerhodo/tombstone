import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';

interface MessageData {
  userName?: string | null;
  email?: string | null;
  content?: string;
  role?: string;
  createdAt?: Date;
  approved?: boolean;
}

const sendData = async (
  type: string,
  { userName, email, content, createdAt, role, approved }: MessageData
) => {
  const docData = Object.fromEntries(
    Object.entries({
      userName,
      email,
      content,
      role,
      createdAt,
      approved,
    }).filter(([_, value]) => value !== undefined)
  );

  try {
    await addDoc(collection(db, type), docData);
  } catch (error) {
    console.error('Db erişimde hata oluştu: ', error);
  }
};

const approveData = async (id: string, type: string) => {
  const docRef = doc(db, type, id);
  try {
    await updateDoc(docRef, {
      approved: true,
    });
  } catch (error) {
    console.error('Onaylama işlemi sırasında hata oluştu: ', error);
  }
};

export { sendData, approveData };

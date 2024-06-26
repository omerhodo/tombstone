import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  limit,
} from 'firebase/firestore';
import { db } from '@/firebase';
import i18n from 'i18next';

const getData = async (type: string, order: string): Promise<any[]> => {
  if (order !== 'asc' && order !== 'desc') {
    throw new Error(i18n.t('order parameter must be asc or desc'));
  }

  const dataCol = collection(db, type);
  const q = query(dataCol, orderBy('createdAt', order));

  const querySnapshot = await getDocs(q);
  const data: any[] = [];
  querySnapshot.forEach((doc) => {
    doc.data();
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

async function getUserByEmail(userEmail: string) {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('email', '==', userEmail));

  try {
    const querySnapshot = await getDocs(q);
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      doc.data();
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return data;
  } catch (error) {
    console.error('Error fetching user: ', error);
  }
}

const getLastSixMessages = async (): Promise<any[]> => {
  const messagesCol = collection(db, 'messages');
  const q = query(messagesCol, orderBy('createdAt', 'desc'), limit(6));

  const querySnapshot = await getDocs(q);
  const messages: any[] = [];
  querySnapshot.forEach((doc) => {
    messages.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return messages;
};

export { getData, getUserByEmail, getLastSixMessages };

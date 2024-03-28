import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '@/firebase';

const getData = async (type: string): Promise<any[]> => {
  const dataCol = collection(db, type);
  const q = query(dataCol, orderBy('createdAt', 'desc'));

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

export { getData, getUserByEmail };

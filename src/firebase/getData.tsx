import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase';

const getData = async (type: string): Promise<any[]> => {
  const dataCol = collection(db, type);
  const q = query(dataCol, orderBy('createdAt', 'desc')); // Mesajları createdAt'a göre sıralayın

  const querySnapshot = await getDocs(q);
  const data: any[] = [];
  querySnapshot.forEach((doc) => {
    doc.data();
    // data.push({
    //   id: doc.id,
    //   ...doc.data(),
    // });
  });

  return data;
};

export { getData };

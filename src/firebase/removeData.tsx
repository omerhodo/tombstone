import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

const removeData = async (id: string, type: string) => {
  await deleteDoc(doc(db, type, id));
};

export { removeData };

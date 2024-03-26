import { collection, addDoc } from 'firebase/firestore';

const sendData = async (type: string, { message, userName, ...rest }) => {
  try {
    await addDoc(collection(db, type), {
      text: message,
      userName: userName,
      createdAt: new Date(),
      ...rest,
    });
  } catch (error) {
    console.error('Db erişimde hata oluştu: ', error);
  }
};

export { sendData };

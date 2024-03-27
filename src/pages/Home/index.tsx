import { useState, useEffect } from 'react';
import { getData } from '@/firebase';

import NewMessage from '@components/NewMessage';
import MessageContainer from '@containers/MessageContainer';
import LoadMore from '@components/LoadMore';

const Home = () => {
  const [messages, setMessages] = useState<any[]>([]);

  const getMessages = async () => {
    try {
      const data = await getData('messages');
      setMessages(data);
    } catch (error) {
      console.error('Mesajlar getirilirken hata oluştu: ', error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <NewMessage />
      <MessageContainer messages={messages} />
      <LoadMore messages={messages} />
    </>
  );
};

export default Home;

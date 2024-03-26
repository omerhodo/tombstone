import { useState, useEffect } from 'react';
import { getData } from '@/firebase';
import MessageCard from '@components/MessageCard';

import '@styles/containers/message-container.scss';

const MessageContainer = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    getData('messages').then(setMessages);
    console.log(messages);
  }, []);

  return (
    <>
      <div className="container message-container">
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </>
  );
};

export default MessageContainer;

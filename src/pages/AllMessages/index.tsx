import { useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useMessages } from '@/contexts/MessagesContext';

import MessageCard from '@components/MessageCard';
import Button from '@/components/Button';

const About = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [visibleMessages, setVisibleMessages] = useState<number>(10);
  const { messages } = useMessages();

  const filteredMessages = messages
    .filter((message) =>
      message.userName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, visibleMessages);

  const loadMore = () => {
    setVisibleMessages((prevVisibleMessages) => prevVisibleMessages + 10);
  };

  return (
    <div className="all-messages container">
      <div className="all-messages__search">
        <input
          className="all-messages__search--input"
          type="text"
          placeholder="Mesajı yazan kişiyi arayın..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/">
          <Button text="Anasayfa'ye dön" />
        </Link>
      </div>
      <div className="all-messages__content">
        {filteredMessages.length !== 0 &&
          filteredMessages.map((message, index) => (
            <MessageCard
              key={index}
              name={message.userName}
              content={message.content}
              date={dayjs(message.createdAt.toDate()).format('DD/MM/YYYY')}
            />
          ))}
      </div>
      {visibleMessages < filteredMessages.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default About;

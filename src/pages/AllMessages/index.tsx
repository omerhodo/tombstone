import { useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getData } from '@/firebase';
import useScrollToTop from '@hooks/useScrollToTop';
import dayjs from 'dayjs';

import MessageCard from '@components/MessageCard';
import Button from '@/components/Button';

const AllMessages = () => {
  useScrollToTop();
  const { t } = useTranslation('general');
  const [visibleMessages, setVisibleMessages] = useState<number>(9);
  const [filteredMessages, setFilteredMessages] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    getData('messages').then((data) => {
      setMessages(data);
      setFilteredMessages(data);
    });
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFilteredMessages = messages.filter((message) =>
      message.userName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredMessages(newFilteredMessages);
  };

  const loadMore = () => {
    setVisibleMessages((prevVisibleMessages) =>
      Math.min(prevVisibleMessages + 10, filteredMessages.length)
    );
  };

  return (
    <div className="all-messages container">
      <div className="all-messages__search">
        <input
          className="all-messages__search--input"
          type="text"
          placeholder={t('whoSentMessage')}
          onChange={handleSearchChange}
        />
        <Link to="/" className="all-messages__return">
          <Button
            className="all-messages__return--full"
            text={t('returnMainpage')}
          />
        </Link>
      </div>
      <div className="all-messages__content">
        {filteredMessages.length !== 0 &&
          filteredMessages
            .slice(0, visibleMessages)
            .map((message, index) => (
              <MessageCard
                key={index}
                id={message.id}
                name={message.userName}
                content={message.content}
                date={dayjs(message.createdAt.toDate()).format('DD/MM/YYYY')}
              />
            ))}
      </div>
      {visibleMessages < filteredMessages.length && (
        <Button onClick={loadMore} text={t('loadmore')}></Button>
      )}
    </div>
  );
};

export default AllMessages;

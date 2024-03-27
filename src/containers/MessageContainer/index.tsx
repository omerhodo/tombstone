import dayjs from 'dayjs';
import MessageCard from '@components/MessageCard';
import { useMessages } from '@contexts/MessagesContext';

import '@styles/containers/message-container.scss';

const MessageContainer = () => {
  const { messages, loading } = useMessages();

  return (
    <div className="container message-container">
      {loading && <div>Loading...</div>}
      {!loading &&
        messages
          .slice(0, 6)
          .map((message, index) => (
            <MessageCard
              key={index}
              name={message.userName}
              content={message.content}
              date={dayjs(message.createdAt.toDate()).format('DD/MM/YYYY')}
            />
          ))}
    </div>
  );
};

export default MessageContainer;

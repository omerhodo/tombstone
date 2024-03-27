import dayjs from 'dayjs';
import MessageCard from '@components/MessageCard';

import '@styles/containers/message-container.scss';

const MessageContainer = ({ messages }) => {
  return (
    <div className="container message-container">
      {messages.map((message) => (
        <MessageCard
          key={message.id}
          name={message.userName}
          content={message.content}
          date={dayjs(message.createdAt.toDate()).format('DD/MM/YYYY')}
        />
      ))}
    </div>
  );
};

export default MessageContainer;

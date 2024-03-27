import dayjs from 'dayjs';
import MessageCard from '@components/MessageCard';

import '@styles/containers/message-container.scss';

interface Message {
  userName: string;
  content: string;
  createdAt: {
    toDate: () => Date;
  };
}

interface MessageContainerProps {
  messages: Message[];
  loading: boolean;
}

const MessageContainer = ({ messages, loading }: MessageContainerProps) => {
  return (
    <div className="container message-container">
      {loading && <div>Loading...</div>}
      {!loading &&
        messages.map((message, index) => (
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

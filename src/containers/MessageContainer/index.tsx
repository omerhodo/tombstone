import MessageCard from '@components/MessageCard';

import './message-container.scss';

const MessageContainer = () => {
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

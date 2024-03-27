import NewMessage from '@components/NewMessage';
import MessageContainer from '@containers/MessageContainer';
import LoadMore from '@components/LoadMore';
import { useMessages } from '@contexts/MessagesContext';

interface MessagesProps {
  messages: any[];
  loading: boolean;
}

const Home = () => {
  const { messages, loading } = useMessages() as MessagesProps;

  return (
    <>
      <NewMessage />
      <MessageContainer messages={messages} loading={loading} />
      <LoadMore messages={messages} />
    </>
  );
};

export default Home;

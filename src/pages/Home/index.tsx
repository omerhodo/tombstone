import NewMessage from '@components/NewMessage';
import MessageContainer from '@containers/MessageContainer';
import LoadMore from '@components/LoadMore';

const Home = () => {
  return (
    <>
      <NewMessage />
      <MessageContainer />
      <LoadMore />
    </>
  );
};

export default Home;

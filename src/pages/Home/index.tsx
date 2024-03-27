import { Link } from 'react-router-dom';
import NewMessage from '@components/NewMessage';
import MessageContainer from '@containers/MessageContainer';
import Button from '@components/Button';

const Home = () => {
  return (
    <>
      <NewMessage />
      <MessageContainer />
      <Link to="/all-messages" className="container">
        <Button text="Tüm Mesajlar" />
      </Link>
    </>
  );
};

export default Home;

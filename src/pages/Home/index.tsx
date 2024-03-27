import { Link } from 'react-router-dom';
import MainImage from '@/components/MainImage';
import NewMessage from '@components/NewMessage';
import MessageContainer from '@containers/MessageContainer';
import Button from '@components/Button';
import useScrollToTop from '@hooks/useScrollToTop';

const Home = () => {
  useScrollToTop();

  return (
    <>
      <MainImage />
      <NewMessage />
      <MessageContainer />
      <div className="container mb-30 is-flex-center">
        <Link to="/all-messages">
          <Button text="Tüm Mesajlar" />
        </Link>
      </div>
    </>
  );
};

export default Home;

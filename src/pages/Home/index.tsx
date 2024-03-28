import { Link } from 'react-router-dom';
import MainImage from '@/components/MainImage';
import NewMessage from '@components/NewMessage';
import MessageContainer from '@containers/MessageContainer';
import Button from '@components/Button';
import useScrollToTop from '@hooks/useScrollToTop';
import { useTranslation } from 'react-i18next';

const Home = () => {
  useScrollToTop();
  const { t } = useTranslation('general');

  return (
    <>
      <MainImage />
      <NewMessage />
      <MessageContainer />
      <div className="container mb-30 is-flex-center">
        <Link to="/all-messages">
          <Button text={t('allMessages')} />
        </Link>
      </div>
    </>
  );
};

export default Home;

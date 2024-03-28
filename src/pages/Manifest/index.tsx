import { Link } from 'react-router-dom';
import useScrollToTop from '@hooks/useScrollToTop';
import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';

const Manifest = () => {
  useScrollToTop();
  const { t } = useTranslation('general');

  return (
    <div className="manifest container">
      <h1 className="manifest--title">{t('manifestTitle')}</h1>
      <p className="manifest--description mb-15">{t('manifestFirst')}</p>
      <p className="manifest--description">{t('manifestSecond')}</p>
      <Link to="/" className="manifest--return">
        <Button text={t('mainpage')} />
      </Link>
    </div>
  );
};

export default Manifest;

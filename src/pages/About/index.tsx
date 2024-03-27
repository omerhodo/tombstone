import { Link } from 'react-router-dom';
import useScrollToTop from '@hooks/useScrollToTop';
import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';

const About = () => {
  useScrollToTop();
  const { t } = useTranslation('general');

  return (
    <div className="about container">
      <h1 className="about--title">{t('aboutTitle')}</h1>
      <p className="about--description">
        {t('aboutFirst')}
        <br />
        {t('aboutSecond')}
      </p>
      <Link to="/" className="about--return">
        <Button text={t('mainpage')} />
      </Link>
    </div>
  );
};

export default About;

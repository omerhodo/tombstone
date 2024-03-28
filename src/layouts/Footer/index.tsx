import { useTranslation } from 'react-i18next';
import AuthForm from '@components/AuthForm';

import '@styles/layouts/footer.scss';

const Footer = () => {
  const { t } = useTranslation('general');
  return (
    <footer className="footer">
      <AuthForm />
      <p className="footer__quote">{t('footerQuote')}</p>
    </footer>
  );
};

export default Footer;

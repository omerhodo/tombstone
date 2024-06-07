import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthForm from '@components/AuthForm';

import '@styles/layouts/footer.scss';

const Footer = () => {
  const { t } = useTranslation('general');
  return (
    <footer className="footer">
      <AuthForm />
      <span
        className="footer__quote"
        dangerouslySetInnerHTML={{ __html: t('footerQuote') }}
      ></span>
    </footer>
  );
};

export default Footer;

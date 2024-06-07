import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthForm from '@components/AuthForm';

import '@styles/layouts/footer.scss';

const Footer = () => {
  const { t } = useTranslation('general');
  return (
    <footer className="footer">
      <AuthForm />
      <div className="footer__quote">
        <Link
          to="https://ppr.ist/15uZ0Pl4z"
          target="_blank"
          className="footer__quote--left-button"
        >
          {t('sendMoney')}
        </Link>
        <span dangerouslySetInnerHTML={{ __html: t('footerQuote') }}></span>
      </div>
    </footer>
  );
};

export default Footer;

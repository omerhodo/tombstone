import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logo/tombstone-logo.svg';
import { useTranslation } from 'react-i18next';

import '@styles/layouts/navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <Link to="https://ppr.ist/15uZ0Pl4z" target="_blank">
        <img src={Logo} className="navbar--logo" alt="Logo" />
      </Link>
      <div className="navbar__title">
        <Link className="navbar__link" to="/">
          {t('title')}
        </Link>
      </div>
      <Link to="/manifest">
        <img src={Logo} className="navbar--logo" alt="Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;

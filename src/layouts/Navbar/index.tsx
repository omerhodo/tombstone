import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logo/tombstone-logo.svg';
import { useTranslation } from 'react-i18next';

import '@styles/layouts/navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <img src={Logo} className="navbar--logo" alt="Logo" />
      <div className="navbar__title">
        <Link className="navbar__link" to="/about">
          {t('title')}
        </Link>
      </div>
      <img src={Logo} className="navbar--logo" alt="Logo" />
    </nav>
  );
};

export default Navbar;

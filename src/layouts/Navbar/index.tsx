import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logo/tombstone-logo.svg';

import '@styles/layouts/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} className="navbar--logo" alt="Logo" />
      <div className="navbar__title">
        <Link className="navbar__link" to="/about">
          Tombstone
        </Link>
      </div>
      <img src={Logo} className="navbar--logo" alt="Logo" />
    </nav>
  );
};

export default Navbar;

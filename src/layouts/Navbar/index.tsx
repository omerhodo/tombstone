import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logo/tombstone-logo.svg';

import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar__title">
        <Link className="navbar__link" to="/about">
          Tombstone
        </Link>
      </div>
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;

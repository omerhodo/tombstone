import React from 'react';

import './header.scss';
import MainImage from '@/assets/images/main/main-image.jpg';

const Header = () => {
  return (
    <div className="header mb-30">
      <img className="header__image" src={MainImage} alt="MainImage" />
    </div>
  );
};

export default Header;

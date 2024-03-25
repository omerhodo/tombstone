import MainImage from '@/assets/images/main/main-image.jpg';

import '@styles/layouts/header.scss';

const Header = () => {
  return (
    <div className="header mb-30">
      <img className="header__image" src={MainImage} alt="MainImage" />
    </div>
  );
};

export default Header;

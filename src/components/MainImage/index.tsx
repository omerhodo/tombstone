import MainImageRef from '@/assets/images/main/main-image.jpg';

import '@styles/layouts/header.scss';

const MainImage = () => {
  return (
    <div className="header">
      <img className="header__image" src={MainImageRef} alt="MainImage" />
    </div>
  );
};

export default MainImage;

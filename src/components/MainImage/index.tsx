import '@styles/layouts/header.scss';
import mainImage from '@/assets/images/main/main-image.jpeg';

const MainImage = () => {
  return (
    <div className="header">
      <img src={mainImage} alt="Header Image" className="header--image" />
    </div>
  );
};

export default MainImage;

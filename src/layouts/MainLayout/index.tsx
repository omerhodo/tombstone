import Navbar from '@layouts/Navbar';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

import Button from '@/components/Button';

import '@styles/layouts/main-layouts.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layouts">
      <Navbar />
      <Header />
      <Button
        className="container mb-60 is-cursor-pointer"
        text="Yeni Mesaj"
        fontSize="20px"
        fontWeight="400"
        width="600px"
      />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

import Navbar from '@layouts/Navbar';
import Footer from '@layouts/Footer';

import '@styles/layouts/main-layouts.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layouts">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

import Navbar from '@layouts/Navbar';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import NewMessage from '@components/NewMessage';

import '@styles/layouts/main-layouts.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layouts">
      <Navbar />
      <Header />
      <NewMessage />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

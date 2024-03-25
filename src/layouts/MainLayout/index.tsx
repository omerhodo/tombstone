import Navbar from '@layouts/Navbar';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

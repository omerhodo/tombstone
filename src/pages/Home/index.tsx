import Header from '@layouts/Header';
import Button from '@components/Button';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__new-message">
        <Button
          text="New Message"
          radius={10}
          bgColor="green"
          borderColor="green"
          textColor="white"
          fontSize="20px"
        />
      </div>
    </div>
  );
};

export default Home;

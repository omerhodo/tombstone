import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '@layouts/MainLayout';
import MessageContainer from '@containers/MessageContainer';
import About from '@pages/About';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainLayout children={<MessageContainer />} />}
          />
          <Route path="/about" element={<MainLayout children={<About />} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

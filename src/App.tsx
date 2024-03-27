import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '@contexts/AuthContext';
import MainLayout from '@layouts/MainLayout';
import About from '@pages/About';
import Home from '@pages/Home';

import './App.scss';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout children={<Home />} />} />
          <Route path="/about" element={<MainLayout children={<About />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

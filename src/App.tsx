import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '@contexts/AuthContext';
import { MessagesProvider } from '@contexts/MessagesContext';
import MainLayout from '@layouts/MainLayout';
import About from '@pages/About';
import Home from '@pages/Home';

import './App.scss';

function App() {
  return (
    <AuthProvider>
      <MessagesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout children={<Home />} />} />
            <Route
              path="/about"
              element={<MainLayout children={<About />} />}
            />
          </Routes>
        </Router>
      </MessagesProvider>
    </AuthProvider>
  );
}

export default App;

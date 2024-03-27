import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './i18n';
import { AuthProvider } from '@contexts/AuthContext';
import { MessagesProvider } from '@contexts/MessagesContext';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import About from '@pages/About';
import AllMessages from '@pages/AllMessages';
import { ToastContainer } from '@components/Toastify';

import './App.scss';

function App() {
  return (
    <AuthProvider>
      <MessagesProvider>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout children={<Home />} />} />
            <Route
              path="/all-messages"
              element={<MainLayout children={<AllMessages />} />}
            />
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

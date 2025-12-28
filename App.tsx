
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import AICounselor from './components/AICounselor';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/privacy" element={<div className="p-20 text-center font-black text-[#1a355b] uppercase tracking-widest">Polityka prywatności - treść w przygotowaniu.</div>} />
          <Route path="/terms" element={<div className="p-20 text-center font-black text-[#1a355b] uppercase tracking-widest">Regulamin - treść w przygotowaniu.</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <AICounselor />
      </Layout>
    </Router>
  );
};

export default App;

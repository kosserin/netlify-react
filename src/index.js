import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Episodes from './pages/Episodes/Episodes';
import Episode from './pages/Episode/Episode';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:episodeId" element={<Episode />} />
        <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

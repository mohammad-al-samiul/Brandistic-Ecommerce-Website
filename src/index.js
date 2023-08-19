import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import ContextCart from './Context/ContextCart';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextCart>
    <App />
  </ContextCart>
);

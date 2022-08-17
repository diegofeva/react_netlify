import ReactDOM from 'react-dom';
import React from 'react';

// Import Redux
// import { Provider } from 'react-redux';

import App from './components/App';

// Importamos las hojas de estilos

import './styles/css/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

// TODO Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

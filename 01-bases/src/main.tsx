import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/index';
import './styles/styles.scss';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

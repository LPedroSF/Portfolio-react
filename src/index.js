import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowDown, faCertificate, faEnvelope, faFile, faLightbulb, faX,faSpinner} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faLightbulb, faArrowDown, faEnvelope, faGithub, faFile, faCertificate, faLinkedin, faX, faSpinner)

const root = ReactDOM.createRoot(document.getElementById('root'));

document.getElementById('root')
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import { ConfettiProvider } from './components/ConfettiEffect';
import { ErrorReceiver } from './components/ErrorReceiver/ErrorReceiver';
import './assets/styles/global.scss';
import { AudioPlayerProvider } from './components/AudioPlayer/AudioPlayerProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorReceiver>
    <ConfettiProvider>
      <AudioPlayerProvider>
        <App />
      </AudioPlayerProvider>
    </ConfettiProvider>
  </ErrorReceiver>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

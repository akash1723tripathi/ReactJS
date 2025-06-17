import React from 'react'; // core foundational library 
import ReactDOM from 'react-dom/client'; // use to manipulate DOM -- react implementation on Web
import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

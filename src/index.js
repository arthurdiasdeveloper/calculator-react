import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './global'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* criei o a tag GlobalStyles para que meus componentes siguam 
    um padráo de saida */}
    <GlobalStyles/>

    <App />
    
  </React.StrictMode>
);


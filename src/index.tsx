import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { StateContextProvider } from 'context/state-context';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <StateContextProvider>
      <GlobalStyles />
      <App />
    </StateContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

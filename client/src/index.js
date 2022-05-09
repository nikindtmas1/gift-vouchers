import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById("root");

// create a root
//const root = ReactDOM.createRoot(container);
const root = ReactDOM.createRoot(container);

root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );



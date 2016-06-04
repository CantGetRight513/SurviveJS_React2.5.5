import React from 'react';
import ReactDOM from 'react-dom';

//! import Notes from './components/Notes';  
// imports unordered note list from Notes.jsx

import App from './components/App'; 
// Updated implementation uses App.jsx to import from Notes
// Full application is then rendered from App.jsx (see App.jsx)

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  //!  <Notes />,  // Inserts unordered list of notes here...
  
  <App />,  // App is used instead
  document.getElementById('app')
);

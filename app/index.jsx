import React from 'react';
import ReactDOM from 'react-dom';

import Notes from './components/Notes';  // imports unordered note list from Notes.jsx

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Notes />,  // Insert unordered list of notes here...
  document.getElementById('app')
);

// App.jsx - used to 'orchestrate the execution of our App'
// Has App controls and manages state separately from the data model (the notes list)

import React from 'react';
import Notes from './Notes';

//! export default () => <Notes />;  
// stub implementation just renders the note list.

export default () => (
	<div>
		<button onClick={() => console.log('add note')}>+</button> 
		<Notes />
	</div>/* button is a stub - only functionality is to output to console (for now...)*/ 
	
);
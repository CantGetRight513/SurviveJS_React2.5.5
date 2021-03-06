import React from 'react';  // Required to use more intuitive JSX syntax
import uuid from 'uuid';  // Required to generate unique ids

const notes = [
  {
    //! id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
	id: uuid.v4(),
    task: 'Learn React'
  },
  {
    //! id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
	
	id: uuid.v4(),  // Generates unique ids similar to the previous hardcoded ones
    task: 'Do laundry'
  }
];

export default () => (  		// What is exported when 'Notes' is called
		<ul>{notes.map(note =>
			<li key={note.id}>{note.task}</li>
		)}</ul>        
)
// map returns a list of li elements for React to render
// curly braces {} allow us to mix JavaScript suntax within JSX
// the key property tells React what order to render the elements in
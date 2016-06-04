import React from 'react';

const notes = [
  {
    id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
    task: 'Learn React'
  },
  {
    id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
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
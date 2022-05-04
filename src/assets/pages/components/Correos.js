import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import  {EMAILS}  from './emails';
import { WithContext as ReactTags } from 'react-tag-input';

const suggestions = EMAILS.map(email => {
  return {
    id: email,
    text: email
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Emails = () => {
  const [tags, setTags] = React.useState([
    { id: 'aimeegtz9@hotmail.com', text: 'aimeegtz9@hotmail.com' },
    { id: '160300115@ucaribe.edu.mx', text: '160300115@ucaribe.edu.mx' },
    { id: '160300126@ucaribe.edu.mx', text: '160300126@ucaribe.edu.mx' },
    { id: '160300135@ucaribe.edu.mx', text: '160300135@ucaribe.edu.mx' }
  ]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className="emails">
      <h1> React Tags Example </h1>
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
      </div>
    </div>
  );
};

render(<Emails />, document.getElementById('emails'));

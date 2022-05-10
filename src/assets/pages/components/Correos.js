import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import  {EMAILS}  from './emails';
import { WithContext as ReactTags } from 'react-tag-input';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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

  const fixedOptions = [EMAILS[6]];
  const [value, setValue] = React.useState([...fixedOptions, EMAILS[13]]);


  return (
    <Autocomplete
          multiple
          id="fixed-tags-demo"
          value={value}
          onChange={(event, newValue) => {
            setValue([
              fixedOptions,
              newValue.filter((option) => fixedOptions.indexOf(option) === -1),
            ]);
          }}
          options={EMAILS}
          getOptionLabel={(option) => option.title}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                label={option.title}
                {...getTagProps({ index })}
                disabled={fixedOptions.indexOf(option) !== -1}
              />
            ))
          }
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Fixed tag" placeholder="Favorites" />
          )}
        />
  );
};

render(<Emails />, document.getElementById('emails'));

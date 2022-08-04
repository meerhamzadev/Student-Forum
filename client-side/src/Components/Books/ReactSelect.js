import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { BooksContext } from './BooksContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),

  },


}));

export default function SimpleSelect() {

  const [books, setBooks] = useContext(BooksContext)
  const classes = useStyles();
  const [type, setType] = useState('');

  const handleChange1 = (event) => {
    setType(event.target.value);
  };

  const showBooks = async (e) => {
    e.preventDefault();

    const Data = {
      type
    }

    try {
      const response = await axios.post('https://student--forum.herokuapp.com/books', Data);

      if (response.status === 200 && response.data.booksData.length !== 0) {
        setBooks(response.data.booksData)
      }
      else {
        window.alert('Error 404: Book not Found')
      }
    }
    catch (err) {
      window.alert('Error 500: Server error')
    }

  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="type">Book Type</InputLabel>
        <Select
          labelId="book-type"
          id="book-type"
          value={type}
          onChange={handleChange1}
          label="book-type"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={'Physics'}>Physics </MenuItem>
          <MenuItem value={'Calculus'}>Calculus </MenuItem>
          <MenuItem value={'Computer Science'}>Computer Science </MenuItem>
        </Select>
      </FormControl>



      <Button type="submit" onClick={showBooks} className="timetable__page__button">Show Books</Button>

    </div>
  );
}

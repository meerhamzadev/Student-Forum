import {Button} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import React, {useContext, useState} from 'react';
import {BooksContext} from './BooksContext';

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
  const [Year, setYear] = useState('');
  const [subject, setSubject] = useState('');
  const [section, setSection] = useState('');

  const handleChange1 = (event) => {
    setYear(event.target.value);
  };

  const handleChange2 = (event) => {
    setSubject(event.target.value);
  }
  
  const handleChange3 = (event) => {
      setSection(event.target.value);
  }

  const showBooks = async (e) => {
    e.preventDefault();

    const Data = {
      Year,
      subject
    }

    try {
      const response = await axios.post('http://localhost:5000/books', Data);

      if (response.status === 200 && response.data.booksData.length !== 0) {
        setBooks(response.data.booksData)
      }
      else {
        window.alert('Error 404: Paper not Found')
      }
    }
    catch (err) {
      window.alert('Error 500: Server error')
    }

  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="year">Year</InputLabel>
        <Select
          labelId="year"
          id="year"
          value={Year}
          onChange={handleChange1}
          label="year"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={'2020'}>2020 </MenuItem>
          <MenuItem value={'2019'}>2019 </MenuItem>
          <MenuItem value={'2018'}>2018 </MenuItem>
          <MenuItem value={'2017'}>2017 </MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="subject">Subject</InputLabel>
        <Select
          labelId="subject"
          id="subject"
          value={subject}
          onChange={handleChange2}
          label="Subject"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={'MultiVariant Calculus'}>MultiVariant Calculus</MenuItem>
          <MenuItem value={'Computer Architecture'}>Computer Architecture</MenuItem>
          <MenuItem value={'Operating System'}>Operating System</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="section">Section</InputLabel>
        <Select
          labelId="section"
          id="section"
          value={section}
          onChange={handleChange3}
          label="Section"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" onClick={showBooks} className="books__page__button">Show Books</Button>

    </div>
  );
}

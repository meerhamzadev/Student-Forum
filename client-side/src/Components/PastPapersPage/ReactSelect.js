import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import { PastPaperContext } from './PastPaperContext';
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

  const [pastPaper, setPastPaper] = useContext(PastPaperContext)
  const classes = useStyles();
  const [Year, setYear] = useState('');
  const [subject, setSubject] = useState('');


  const handleChange1 = (event) => {
    setYear(event.target.value);
  };

  const handleChange2 = (event) => {
    setSubject(event.target.value);
  }

  const showTimetable = async (e) => {
    e.preventDefault();

    const Data = {
      Year,
      subject
    }

    try {
      const response = await axios.post('https://student--forum.herokuapp.com/pastpapers', Data);

      if (response.status === 200 && response.data.pastPaperData.length !== 0) {
        setPastPaper(response.data.pastPaperData)
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

      <Button type="submit" onClick={showTimetable} className="timetable__page__button">Show Papers</Button>

    </div>
  );
}

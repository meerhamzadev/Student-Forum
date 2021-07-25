import React, { useContext } from 'react';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import { TimeTableContext } from './TimeTableContext';

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
  const [timeTableData, setTimeTableData] = useContext(TimeTableContext)

  const classes = useStyles();
  const [department, setDepartment] = React.useState('');
  const [section, setSection] = React.useState('');
  const [semester, setSemester] = React.useState('');


  const handleChange1 = (event) => {
    setDepartment(event.target.value);
  };

  const handleChange2 = (event) => {
    setSection(event.target.value);
  }

  const handleChange3 = (event) => {
    setSemester(event.target.value);
  }

  const showTimetable = async (e) => {
    e.preventDefault();

    const Data = {
      department: department,
      section: section,
      semester: semester,
    }

    try {
      const response = await axios.post('http://localhost:5000/timetable', Data);

      if (response.status === 200 && response.data.data.length !== 0) {
        setTimeTableData(response.data.data)
      }

      else {
        window.alert('Error 404: Data not found')
      }
    }
    catch (err) {
      window.alert('Error 500: Server error')
    }

  }

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="department">Department</InputLabel>
        <Select
          labelId="department"
          id="department"
          value={department}
          onChange={handleChange1}
          label="Department"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={'Computer Science'}>Computer Science</MenuItem>
          <MenuItem value={'Mechanical'}>Mechanical Engineering</MenuItem>
          <MenuItem value={'Civil'}>Civil Engineering</MenuItem>
          <MenuItem value={'Electrical'}>Electrical Engineering</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="section">Section</InputLabel>
        <Select
          labelId="section"
          id="section"
          value={section}
          onChange={handleChange2}
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

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="semester">Semester</InputLabel>
        <Select
          labelId="semester"
          id="semester"
          value={semester}
          onChange={handleChange3}
          label="Semester"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>

        </Select>
      </FormControl>
      <Button type="submit" onClick={showTimetable} className="timetable__page__button">Show Timetable</Button>

    </>
  );
}

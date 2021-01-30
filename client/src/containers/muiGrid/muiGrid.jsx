import React from 'react'
import {Grid,Paper,TextField,InputLabel,MenuItem,Select,FormControl,RadioGroup,Radio,FormControlLabel,FormLabel, Checkbox,FormGroup, Input, Slider, Switch, Button, Box} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { spacing } from '@material-ui/system';
import { Autocomplete } from '@material-ui/lab'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btn:{
    marginRight: theme.spacing(1),
  }
}));
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
export default function MuiGrid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl variant="outlined" fullWidth={true} >
                <TextField id="outlined-basic" label="First Name" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl variant="outlined" fullWidth={true} >
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl component="fieldset" fullWidth={true}>
                <FormLabel component="legend">Sex</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth={true}>
                <FormLabel component="legend">Theme</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox  name="checkedA" />}
                        label="Secondary"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Primary"
                    />
                </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth={true}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="DOB"
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth={true}>
            <Autocomplete
                id="combo-box-demo"
                options={ [
                    { title: 'The Shawshank Redemption', year: 1994 },
                    { title: 'The Godfather', year: 1972 }]}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <FormControl  fullWidth={true}>
            <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              value = {[]}
              multiple
              input={<Input />}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            
              <FormControl fullWidth={true}>
              <FormLabel component="legend">Poverty Range</FormLabel>
                <Slider
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  value={10}
                />
              </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth={true}>
              <FormLabel component="legend">Agreement</FormLabel>
                <FormControlLabel
                  control={<Switch  name="checkedA" />}
                  label="Accept terms and conditions"
                />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button variant="contained" color="primary" className={classes.btn}>
                Submit
              </Button>
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
          </Grid>
        </Grid>
      </div>
    )
}

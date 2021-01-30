import React from 'react'
import { FormControl, FormLabel, FormGroup, FormControlLabel,Input,InputLabel,TextField,RadioGroup,Radio,Checkbox, Select, MenuItem, Slider, Switch, Grid, Button, ListItemText} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import {Autocomplete} from "@material-ui/lab";
import { useForm, Controller } from 'react-hook-form';
export default function MuiReactHookForm() {
    const {handleSubmit, register, errors, watch, control, reset} = useForm(
        {
            defaultValues : 
            {
                firstName : "Prasobh",
                age : 10,
                gender : 'male',
                primary : true,
                dob : "2017-05-24",
                publishedDate : "2017-05-24T13:30",
                temperature : [2,5],
                updatedDate : "01/28/2020",
                country : { code: "AD", label: "Andorra", phone: "376" },
                hobbies : [],
                hobbies2 : [30]
            }
        }
    )
    const onSubmit = (data) => {

        console.log(`Data submitted....`)
        console.log(data)
    }
    const hobbies = [
        {title : "Sports", value : 10},
        {title : "Reading", value : 20},
        {title : "Spirituality", value : 30}
    ]
    return (
        <form onSubmit={ handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controller name="firstName" control={control} 
                    as = {
                        <TextField name="firstName" label="First Name" variant="outlined" />
                    } />
                </Grid>
                <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Age</FormLabel>
                    <Controller name="age" control={control} as = {
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>} />
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <Controller name="gender" control={control} as = {
                        <RadioGroup aria-label="gender" name="gender1" >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                        </RadioGroup>
                    }
                    />
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Theme</FormLabel>
                        <Controller
                            name="secondary"
                            control={control}
                            render={props => {
                                return (
                                    <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="checkedA" onChange={e => props.onChange(e.target.checked)} checked={props.value} />}
                                                label="Secondary"
                                                value="secondary"
                                            />
                                        </FormGroup>
                                )
                            }
                            } // props contains: onChange, onBlur and value
                        />
                        <Controller
                            name="primary"
                            control={control}
                            render={props => {
                                return (
                                    <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="checkedA" onChange={e => props.onChange(e.target.checked)} checked={props.value} />}
                                                label="Primary"
                                                value="primary"
                                            />
                                        </FormGroup>
                                )
                            }
                            } // props contains: onChange, onBlur and value
                        />
                        <Controller
                            name="uncontrolled"
                            control={control}
                            render={props => {
                                return (
                                    <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="checkedA" onChange={e => props.onChange(e.target.checked)} checked={props.value} />}
                                                label="Uncontrolled"
                                                value="uncontrolled"
                                            />
                                        </FormGroup>
                                )
                            }
                            } // props contains: onChange, onBlur and value
                        />
               </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">DOB</FormLabel>
                        <Controller name="dob" control={control} as = {
                            <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Published Date</FormLabel>
                        <Controller name="publishedDate" control={control} as = {
                            <TextField
                            id="date"
                            label="Published Date"
                            type="datetime-local"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Temperature</FormLabel>
                         <Controller
                            name="temperature"
                            control={control}
                            // defaultValue={[0, 10]}
                            render={(props) => (
                                <Slider
                                {...props}
                                onChange={(_, value) => {
                                    props.onChange(value);
                                }}
                                valueLabelDisplay="auto"
                                max={10}
                                step={1}
                                />
                        )}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Accept Terms and Conditions</FormLabel>
                        <Controller
                        name="acceptTerms"
                        control={control}
                        render={(props) => (
                            <Switch
                            onChange={(e) => props.onChange(e.target.checked)}
                            checked={props.value}
                            />
                        )}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Updated Date</FormLabel>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Controller
                            name="updatedDate"
                            control={control}
                            render={({ ref, ...rest }) => (
                                <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                                {...rest}
                                />
                            )}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Country</FormLabel>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Controller
                            name="country"
                            control={control}
                            render={(props) => (
                                <Autocomplete
                                  {...props}
                                  style={{ width: 300 }}
                                  options={[  { code: "AD", label: "Andorra", phone: "376" },
                                  { code: "AE", label: "United Arab Emirates", phone: "971" },
                                  { code: "AF", label: "Afghanistan", phone: "93" }]}
                                  getOptionLabel={(option) => option.label}
                                  renderOption={(option) => (
                                    <span>
                                      <small>{option.code}</small>
                                      {option.label}
                                    </span>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Choose a country"
                                      variant="outlined"
                                    />
                                  )}
                                  onChange={(_, data) => props.onChange(data)}
                                />
                              )}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Hobbies</FormLabel>
                        <Controller name="hobbies" control={control} onChange= {(data) => (data)} render = {(props) => (
                            <Select
                                {...props}
                                labelId="demo-mutiple-select-label"
                                id="demo-simple-select"
                                multiple
                                input={<Input />}
                                onChange = {(event) => {
                                    props.onChange(event.target.value);
                                }}
                                >
                                    <MenuItem value={10}>Sports</MenuItem>
                                    <MenuItem value={20}>Reading</MenuItem>
                                    <MenuItem value={30}>Spirituality</MenuItem>
                            </Select>)} />
                    </FormControl>
                </Grid>
                
                {/* checked={hobbies.indexOf("Sports") > -1}
                            checked={hobbies.indexOf("Reading") > -1}
                            checked={hobbies.indexOf("Spirituality") > -1} */}
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Hobbies2</FormLabel>
                        <Controller name="hobbies2" control={control} onChange= {(data) => (data)} render = {(props) => {
                            return <Select
                                {...props}
                                labelId="demo-mutiple-select-label"
                                id="demo-simple-select"
                                multiple
                                input={<Input />}
                                onChange = {(event) => {
                                    props.onChange(event.target.value);
                                }}
                                 renderValue={(selected) => { 
                                    let arr = [];
                                    selected.map(val => {
                                         hobbies.map(obj => obj.value == val && arr.push(obj.title));   
                                    });
                                    return arr.join(', ')
                                 }}

                                >
                                {hobbies.map(obj => (
                                    <MenuItem value={obj.value}>
                                    <Checkbox checked={props.value.indexOf(obj.value) > -1} />
                                    <ListItemText primary={obj.title} />
                                    </MenuItem>
                                ))}
                            </Select>}} />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                    Submit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => reset()}>
                    Reset
                    </Button>
                </Grid>
            </Grid>
        </form>

    )
}

import React, {Fragment, useState} from 'react'
import { Form, Button, Row, Col, ButtonGroup } from "react-bootstrap";
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const top100Films = [
{ title: 'The Shawshank Redemption', year: 1994 },
{ title: 'The Godfather', year: 1972 },
{ title: 'The Godfather: Part II', year: 1974 },
{ title: 'The Dark Knight', year: 2008 },
{ title: '12 Angry Men', year: 1957 },
{ title: "Schindler's List", year: 1993 }
];
export default function AddUserVazhipadd() {
    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const [records, setRecords] = useState([1]);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    // const schema = yup.object().shape({
    //     name : yup.string().required(),
    //     vazhippad : yup.string().required(),
    //     date : yup.string().required() 
    // });

    const schema = yup.object().shape({
        userVazhippad: yup.array().of(yup.object().shape({
            name : yup.object().required(),
            vazhippad : yup.string().required(),
            date : yup.string().required() 
        }))
    });

    const {register, handleSubmit, errors, control} = useForm({
       // mode : 'touched',
        resolver : yupResolver(schema),
        defaultValues : {
            userVazhippad : [
                {
                    name : 20
                }
            ]
        }
    });
    const handleSearch = (query) => {
        setIsLoading(true);
        setTimeout(() => {
            const options = [{id: 1, name: 'prasobh'},
            {id: 2, name: 'chandran'}]
            setOptions(options);
            setIsLoading(false);
        }, 2000);
       
    };
    const filterBy = () => true;
    const addMore = () => {
        let copyRecords = [...records,records.length + 1];
        setRecords(copyRecords)
    }
    const remove = () => {
        let copyRecords = [...records.filter((v,i) => i != records.length-1)]
        setRecords(copyRecords)
    }
    const onSubmit = (data) => {
        console.log(data)
    }
    console.log(errors)
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {records.length && records.map((obj,i) => {
                return (
                    <Row>
                        <Col md="4">
                            <Form.Group controlId="Name">
                            <Form.Label size="md">Name</Form.Label>
                            <Controller
                                name={`userVazhippad[${i}].name`}
                                control={control}
                                render={({onChange}) =>{
                                    return (<Autocomplete
                                        id="combo-box-demo"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 300 }}
                                        onChange={(e, data) => onChange(data) }
                                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" 
                                        />}
                                    />)
                                    }
                                    
                                } 
                            />
                            {/* <Form.Control type="text" placeholder="Enter Name" name={`userVazhippad[${i}].name`} ref={register} /> */}
                            <Form.Text className="text-muted">
                                Please enter three letter to show auto-suggestion
                            </Form.Text>
                        { errors.userVazhippad && errors.userVazhippad[i] && errors.userVazhippad[i].name && <Form.Text className="text-danger">Name is required</Form.Text> }
                            </Form.Group>
                        </Col>
                        <Col  md="4">
                            <Form.Group controlId="Vazhippad" >
                            <Form.Label>Select Vazhippad</Form.Label>
                            <Form.Control as="select" name={`userVazhippad[${i}].vazhippad`} ref={register}>
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                            </Form.Control>
                            {errors.userVazhippad && errors.userVazhippad[i] && errors.userVazhippad[i].vazhippad  && <Form.Text className="text-danger">Vazhippad is required</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group controlId="Name"  >
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" placeholder="Enter Date" name={`userVazhippad[${i}].date`} ref={register} />
                            <Form.Text className="text-muted">
                                Please enter date in format DD/MM/YYYY
                            </Form.Text>
                            {errors.userVazhippad && errors.userVazhippad[i] && errors.userVazhippad[i].date && <Form.Text className="text-danger">Date is required</Form.Text>}
                            </Form.Group>
                            
                        </Col>
                    </Row>
                )
            })}
        
            <Row>
            <Col>
                <ButtonGroup className="mb-2">
                    <Button variant="primary" type="submit">Submit</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2 float-right">
                    <Button variant="success" type="button" name="addMore" onClick={addMore}>Add More</Button>
                    {records.length > 1 &&  <Button variant="danger" type="button"  name="remove" onClick={remove}>Remove</Button>}
                    
                </ButtonGroup>
            </Col>
        </Row>  
      </Form>
    )
}

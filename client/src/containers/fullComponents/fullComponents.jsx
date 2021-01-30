import React from 'react'
import {Form, Row,Col, Button} from "react-bootstrap";
import {
    TextField,
    Checkbox,
    Select,
    MenuItem,
    Switch,
    RadioGroup,
    FormControlLabel,
    ThemeProvider,
    Radio,
    createMuiTheme,
    Slider,
    
  } from "@material-ui/core";
import ReactSelect from "react-select";
import ReactDatePicker from "react-datepicker";
import NumberFormat from "react-number-format";
import "react-datepicker/dist/react-datepicker.css";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup"
import {useForm,Controller} from "react-hook-form";
export default function FullComponents() {
    const schema = Yup.object().shape({
        firstName : Yup.string().required(),
        country : Yup.number().required(),
        gender : Yup.string().required(),
        accept : Yup.bool().oneOf([true], 'Field must be checked'),
        other : Yup.bool().oneOf([true], 'Field must be checked'),
        state : Yup.object().required(),
        dob : Yup.string().required(),
        amountToPay : Yup.string().required(),
        performance : Yup.number().required(),
    })
    const {control,errors,handleSubmit,register} = useForm({
        resolver : yupResolver(schema),
        defaultValues : {
            accept : false,
            other : false,
            state : {label : "None", value : "  "}
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }
    console.log(`errors`)
    console.log(errors)
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={5}>
                    <Form.Group controlId="firstName">
                        <Form.Label size="md">First Name</Form.Label>
                        <Controller
                            name= "firstName"
                            as = {TextField}
                            control = {control}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Group controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Controller 
                            as={
                                <Select>
                                    <MenuItem value={1}>Afganistan</MenuItem>
                                    <MenuItem value={2}>America</MenuItem>
                                </Select>
                            }
                            name="country"
                            control={control}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Group controlId="Gender">
                        <Controller name="gender" control={control} 
                            as = {<RadioGroup aria-label="Gender">
                            <FormControlLabel 
                                value="male"
                                label="Male"
                                control={<Radio />}
                            />
                            <FormControlLabel 
                                value="female"
                                label="Female"
                                control={<Radio />}
                            />
                        </RadioGroup>} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Group controlId="accept">
                            <Form.Label>Accept Agreement</Form.Label>
                        <Controller
                            name="accept"
                            control={control}
                            render={(props) => {
                                console.log(props);
                                return (<Checkbox
                                onChange={(e) => props.onChange(e.target.checked)}
                                checked={props.value}
                                />)
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Group>
                        <Form.Label>Accept Other Agreement </Form.Label>
                        <Controller name="other" control={control} 
                        render = {(props) => {
                            return <Switch onChange={(e) => props.onChange(e.target.checked)} checked = {props.value} />
                        }}
                         />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Group>
                        <Form.Label>State </Form.Label>
                        <Controller name="state" control={control} as={ReactSelect}
                        options = {[
                            {value : 1, label : "kerala"},
                            {value : 2, label : "temil nadu"}
                        ]}
                        isClearable
                         />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Group>
                        <Form.Label>Date of Birth </Form.Label>
                        <Controller name="dob" control={control} 
                        render={(props) => {
                            return(
                                <ReactDatePicker 
                                    {...props}
                                    selected = {props.value}
                                    className="input"
                                    placeholderText="Select DOB"
                                />
                            )
                        }} 
                         />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Group>
                        <Form.Label>Amount to Pay</Form.Label>
                        <Controller name="amountToPay" control={control} 
                        as={NumberFormat}
                        thousandSeparator
                        className="input"
                         />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Group>
                        <Form.Label>Performance</Form.Label>
                        <Controller name="performance" control={control} 
                        defaultValue ={[0,10]}
                        render = {(props) => {
                            return <Slider {...props} max={10} step={1} onChange={(e,data) => props.onChange(data)} valueLabelDisplay="auto" />
                        }}
                         />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

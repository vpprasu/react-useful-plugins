import React, {useState} from 'react'
import {Form, Row, Col, Button, ButtonGroup} from "react-bootstrap";
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
export default function AddFamilyInfo() {
    const [records, setRecords] = useState([1]);
    const schema = yup.object().shape({
        familyInfo : yup.array().of(yup.object().shape({
            name : yup.string().required()
        }))
    })
    const addMore = () => {
        let copyRecords = [...records, records.length + 1];
        setRecords(copyRecords);
      }
      const remove = () => {
        let copyRecords = records.filter((obj,i) => i != records.length -1)
        setRecords(copyRecords);
      }
      const onSubmit = data => {
        console.log(`submitted`)
        console.log(data)
      }
    const { register, handleSubmit, errors } = useForm({
        resolver : yupResolver(schema)
    })
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        {records.length && records.map((obj,i) => {
            return ( <Row>
                <Col md={8} lg={5}>
                    <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name={`familyInfo[${i}].name`} ref={register} />
                    {errors.familyInfo && errors.familyInfo[i] && errors.familyInfo[i].name && <Form.Text className="text-danger">Name is required</Form.Text>}
                    </Form.Group>
                </Col>
            </Row>)
        })}
       
        <Row>
            <Col md={8} lg={5}>
                <Form.Group controlId="Vazhippad">
                <Form.Label>Family Address</Form.Label>
                <Form.Control as="textarea" rows={3} name="address" ref={register} />
                </Form.Group>
            </Col>
        </Row>
        <Row>
        <Col>
                <ButtonGroup className="mb-2">
                    <Button variant="primary" type="submit">Submit</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2 float-right">
                    <Button variant="success" onClick={addMore}>Add More Names</Button>
                    {records.length > 1 && <Button variant="danger" onClick={remove}>Remove</Button>}
                    
                </ButtonGroup>
            </Col>
        </Row>

      </Form>
    )
}

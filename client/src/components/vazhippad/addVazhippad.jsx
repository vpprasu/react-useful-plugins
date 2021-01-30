import React, {useState} from 'react'
import { Form, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm} from "react-hook-form";
export default function AddVazhippad() {
    const [records, setRecords] = useState([1]);
    // const schema = yup.object().shape({
    //   vazhippad : yup.string().required(),
    //   price : yup.number().required()
    // });

    const schema = yup.object().shape({
      vazhippad : yup.array().of(yup.object().shape({
        vazhippad : yup.string().required(),
        price : yup.number().required()
      }))
    })
    const { register, handleSubmit, errors } = useForm({
      resolver : yupResolver(schema)
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
    // console.log(errors)
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
      {records.length && records.map((obj,i) => {
       return (<Row>
          <Col md={8} lg={6}>
            <Form.Group controlId="Name">
              <Form.Label>Vazhippad Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" name={`vazhippad[${i}].vazhippad`} ref={register}/>
              <Form.Text className="text-muted">
                Please enter three letter to show auto-suggestion
              </Form.Text>
              {errors.vazhippad && errors.vazhippad[i] && errors.vazhippad[i].vazhippad && <Form.Text className="text-danger">Vahippad is required</Form.Text>}
            </Form.Group>
          </Col>
          <Col md={8} lg={6}>
            <Form.Group controlId="Name">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter Price" name={`vazhippad[${i}].price`} ref={register} />
              {errors.vazhippad && errors.vazhippad[i] && errors.vazhippad[i].price && <Form.Text className="text-danger">Price is required</Form.Text>}
            </Form.Group>
          </Col>
        </Row>)
      })}
      <Row>
        <Col>
                <ButtonGroup className="mb-2">
                    <Button variant="primary" type="submit">Submit</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2 float-right">
                    <Button variant="success" onClick={addMore}>Add More</Button>
                    {records.length > 1 && <Button variant="danger" onClick={remove}>Remove</Button>}
                </ButtonGroup>
            </Col>
      </Row>
        
      </Form>
    )
}

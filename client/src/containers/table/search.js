import React from 'react'
import {Form, Col} from "react-bootstrap";
export default function Search({filter, setFilter,handleSearch}) {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name = "first_name" placeholder="Enter First Name" onChange={(e) => setFilter({...filter, [e.target.name] : e.target.value})} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name = "last_name" placeholder="Enter Last Name" onChange={(e) => setFilter({...filter, [e.target.name] : e.target.value})} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name = "email" placeholder="Enter Email" onChange={(e) => setFilter({...filter, [e.target.name] : e.target.value})} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" name = "gender" placeholder="Enter Gender" onChange={(e) => setFilter({...filter, [e.target.name] : e.target.value})} />
                </Form.Group>

            </Form.Row>
        </Form>
    )
}

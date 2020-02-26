import React from 'react';
import { Form, Button } from 'react-bootstrap';


export default () => {
    return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGroupName">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Full name" />
            </Form.Group>
            <Form.Group controlId="formGroupPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control placeholder="+380-00-00-000-00" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Button variant="primary" onClick={''}>
                Submit
            </Button>
        </Form>
    )
}
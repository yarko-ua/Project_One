import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { ShowModal, HideModal } from './../../actions/actions'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


function FormModal(props) {
    console.log(props.cart.Modal);
    return (
        <Modal show={props.cart.Modal} backdrop="static"
            onHide={() => props.HideModal()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton={true}>
                <Modal.Title>Fill the form (for delivery service)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    <Button variant="primary" onClick={() => { props.HideModal(); alert('Thanks for purchase') }}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <NavLink to="/snowboards" >
                    <Button variant="secondary" onClick={() => props.HideModal()}>
                        Back to shopping
                </Button>
                </NavLink>
            </Modal.Footer>
        </Modal >
    )
}

const mapState = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    ShowModal: () => dispatch(ShowModal()),
    HideModal: () => dispatch(HideModal()),
});
export default connect(mapState, mapDispatchToProps)(FormModal)
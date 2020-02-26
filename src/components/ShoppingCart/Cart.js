import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RemoveFromCart, Increase, Decrease } from './../../actions/actions'
// import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Form from './../Form/Form';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    show = () => {
        this.setState({ showModal: true })
    }

    hide = () => {
        this.setState({ showModal: false })
    }

    render() {
        console.log(this.props);
        return (
            <div className="cart" >
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th className="Photo">Photo:</th>
                            <th className="Product">Product:</th>
                            <th className="Gender">Gender:</th>
                            <th className="Quantity">Quantity:</th>
                            <th className="Price">Price:</th>
                            <th colSpan={2} className="Total">Total price:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.shoppingCart.map(item => (
                            <tr className="cart-table__item">
                                <td className="cart-table__picture">
                                    <img src={item.image} alt="product_picture" />
                                </td>
                                <td className="cart-table__info">
                                    <p>
                                        {item.name + ' ' + item.model}
                                    </p>
                                    <p>
                                        {item.size}
                                    </p>
                                </td>
                                <td className="cart-table__gender">
                                    {item.sex}
                                </td>
                                <td className="cart-table__quantity">
                                    <span>{item.counter}</span>
                                    <button onClick={() => this.props.Decrease(item.counter)}>-</button>
                                    <button onClick={() => this.props.Increase(item.counter)}>+</button>
                                </td>
                                <td className="cart-table__price">
                                    {item.price}
                                </td>
                                <td className="cart-table__total">
                                    {item.price * item.counter}

                                </td>
                                <td className="cart-table__delete">
                                    <Button delete onClick={() => this.props.RemoveFromCart(item)}>X</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Total: {
                    // (function () {
                    //     item.reduce((total, crnt) => {
                    //         console.log(total)
                    //         return total + crnt.price
                    //     }, 0)
                    // })()
                }
                </h2>
                <div className="proceed">
                    {/* <NavLink to="cart/order"> */}
                    <button onClick={this.show}>Proceed with order</button>
                    {/* </NavLink> */}
                </div>
                <Modal show={this.state.showModal} backdrop="static"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Fill the form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Back
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }

}


const mapState = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    RemoveFromCart: content => dispatch(RemoveFromCart(content)),
    Increase: content => dispatch(Increase(content)),
    Decrease: content => dispatch(Decrease(content)),

});
export default connect(mapState, mapDispatchToProps)(Cart)
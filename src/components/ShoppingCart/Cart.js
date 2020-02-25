import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RemoveFromCart, Increase, Decrease } from './../../actions/actions'
import { NavLink } from 'react-router-dom';

class Cart extends Component {
    // componentDidMount(){
    //     () => console.log('mount-' + this.props.cart.shoppingCart)
    // };

    render() {
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
                                    <button onClick={() => this.props.Decrease(item.counter)}>-</button>
                                    <span>{item.counter}</span>
                                    <button onClick={() => this.props.Increase(item.counter)}>+</button>
                                </td>
                                <td className="cart-table__price">
                                    {item.price}
                                </td>
                                <td className="cart-table__total">
                                    {item.price * item.counter}

                                </td>
                                <td className="cart-table__delete">
                                    <button onClick={() => this.props.RemoveFromCart(item.model)}>X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Total: {
                    // (function () {
                    //     let sum = 0
                    //     this.props.cart.shoppingCart.forEach(element => {
                    //         sum += +element.price;
                    //         console.log(sum);
                    //     })
                    //     console.log(sum);
                    //     return sum;
                    // })()
                }</h2>
                <div className="proceed">
                    <NavLink to="cart/order">
                        <button >Proceed with order</button>
                    </NavLink>
                </div>
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
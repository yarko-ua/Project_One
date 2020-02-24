import React from 'react';
import { connect } from 'react-redux';
import { RemoveFromCart } from './../../actions/actions'
import { NavLink } from 'react-router-dom';

function Cart(props) {
    return (
        <div className="cart">
            <table className="cart-table">
                <thead>
                    <tr>
                        <td>Photo:</td>
                        <td>Product:</td>
                        <td>Gender:</td>
                        <td>Quantity:</td>
                        <td>Price:</td>
                        <td colSpan={2}>Total price:</td>
                    </tr>
                </thead>
                <tbody>
                    {props.cart.shoppingCart.map(item => (
                        <tr className="cart-table__item">
                            <td className="cart-table__picture">
                                <img src={item.image} alt="product_picture" />
                            </td>
                            <td className="cart-table__info">
                                <p>
                                    {item.name + ' ' + item.model}
                                </p>
                                <p>
                                    {item.size.join(' ')}
                                </p>
                            </td>
                            <td className="cart-table__gender">
                                {item.sex}
                            </td>
                            <td className="cart-table__quantity">
                                <button>-</button>
                                <input value={1} type="text" />
                                <button>+</button>
                            </td>
                            <td className="cart-table__price">
                                {item.price}
                            </td>
                            <td className="cart-table__total">
                                {item.price //* { item.quantity }
                                }
                            </td>
                            <td className="cart-table__delete">
                                <button onClick={() => props.RemoveFromCart(item.model)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Total: {
                (function () {
                    let sum = 0
                    props.cart.shoppingCart.forEach(element => {
                        sum += +element.price;
                        console.log(sum);
                    })
                    console.log(sum);
                    return sum;
                })()
            }</h2>
            <div className="proceed">
                <NavLink to="cart/order">
                    <button >Proceed with order</button>
                </NavLink>
            </div>
        </div >
    )
}


const mapState = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    RemoveFromCart: content => dispatch(RemoveFromCart(content)),

});
export default connect(mapState, mapDispatchToProps)(Cart)
import React from 'react';
import { connect } from 'react-redux';

function Cart(props) {
    return (
        <div>
            <table>
                {props.cart.shoppingCart.map(item => (
                    <tr>
                        <td>{item.name + ' ' + item.model}</td>
                        <td>{item.size}</td>
                        <td>{item.price}</td>
                        <td>{item.sex}</td>
                        <td>
                            <button>X</button>
                        </td>
                    </tr>
                ))}
            </table>
            <h2>Items: {props.cart.shoppingCart.length}</h2>
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
        </div >
    )
}


const mapState = state => ({ ...state });
export default connect(mapState)(Cart)
import React from 'react';
import { connect } from 'react-redux';
import { AddToCart } from './../../../actions/actions'

function ArrayOfProducts(props) {

    return (
        <div className="products-container">
            {props.products.map((item, index) => (
                <div className="products-container__item" key={index}>
                    <div className="rotate">
                        <div className="front">
                            <img
                                src={item.image}
                                alt={item.category} />
                            <h3 className='product-brand'>
                                {item.name}
                            </h3>
                            <p className='product-name'>
                                {item.model} {item.category}
                                <span className="line"></span>
                                {item.sex}
                            </p>
                            <span className='product-price'>
                                {'$' + item.price}
                            </span>
                        </div>
                        <div className="back">
                            <p className="product-description">
                                {item.description}
                            </p>
                            <div className="product-sizes">
                                {item.size.map(size => <span key={size} className="product-sizes__item">{size}</span>)}
                            </div>
                            <button className="product-add-to-cart"
                                onClick={() => props.AddToCart(item)}
                            >ADD</button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

const mapState = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    AddToCart: content => dispatch(AddToCart(content)),
});
export default connect(mapState, mapDispatchToProps)(ArrayOfProducts)
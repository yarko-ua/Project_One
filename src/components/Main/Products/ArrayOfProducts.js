import React from 'react';

function ArrayOfProducts(props) {
    let imgBoard = 'https://content.backcountry.com/images/items/1200/NVS/NVS008E/ONECOL.jpg';
    let imgBoot = 'https://content.backcountry.com/images/items/1200/TTW/TTW00DZ/BK.jpg';
    let imgBinding = 'https://content.backcountry.com/images/items/1200/BUR/BUR02WQ/SEAFOA.jpg'

    return (
        <>
            {props.products.map((item, index) => (
                <div className="products-container__item" key={index}>
                    <div className="rotate">
                        <div className="front">
                            <img
                                src={
                                    item.category === 'Snowboard' ? imgBoard :
                                        item.category === 'Snowboard Binding' ? imgBinding : imgBoot
                                }
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
                                {item.size.map(size => <span className="product-sizes__item">{size}</span>)}
                            </div>
                            <button className="product-add-to-cart">ADD</button>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}


export default ArrayOfProducts
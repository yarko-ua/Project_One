import React from 'react';

function ArrayOfProducts(props) {
    let imgBoard = 'https://content.backcountry.com/images/items/1200/NVS/NVS008E/ONECOL.jpg';
    let imgBoot = 'https://content.backcountry.com/images/items/1200/TTW/TTW00DZ/BK.jpg';
    let imgBinding = 'https://content.backcountry.com/images/items/1200/BUR/BUR02WQ/SEAFOA.jpg'



    return (
        <>
            {props.products.map((item, index) => (
                <div className="products-container__item" key={index}>
                    <img
                        src={
                            item.category === 'Snowboard' ? imgBoard :
                                item.category === 'Snowboard Binding' ? imgBinding : imgBoot
                        }
                        alt={item.category} />
                    <h3>
                        {item.name}
                    </h3>
                    <p>
                        {item.model} {item.category}
                        <span className="line"></span>
                        {item.sex}
                    </p>
                    <span>
                        {'$' + item.price}
                    </span>
                </div>
            ))}
        </>
    )
}


export default ArrayOfProducts
import React from 'react';
import * as productsBase from '../../products.json';
import ArrayOfProducts from './Products/ArrayOfProducts';
import Filter from './Filter/Filter.js';

function Main(props) {

    const snowboards = productsBase.goods.filter(item => item.category === "Snowboard")
    const bindings = productsBase.goods.filter(item => item.category === "Snowboard Binding")
    const boots = productsBase.goods.filter(item => item.category === "Snowboard Boot")

    if (props.snowboard) {
        return (
            <section>
                <div className="wrapper">
                    <Filter options={props.options} brands={props.brands} />
                    <div className="products-container">
                        <ArrayOfProducts products={snowboards} />
                    </div>
                </div>
            </section>
        );
    }
    if (props.binding) {
        return (
            <section>
                <div className="wrapper">
                    <Filter options={props.options} brands={props.brands} />
                    <div className="products-container">
                        <ArrayOfProducts products={bindings} />
                    </div>
                </div>
            </section>
        );
    }
    if (props.boot) {
        return (
            <section>
                <div className="wrapper">
                    <Filter options={props.options} brands={props.brands} />
                    <div className="products-container">
                        <ArrayOfProducts products={boots} />
                    </div>
                </div>
            </section>
        );
    }
}


export default Main
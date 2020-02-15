import React, { Component } from 'react';
import * as productsBase from '../../products.json';
import ArrayOfProducts from './Products/ArrayOfProducts';
class Main extends Component {


    render() {
        return (
            <section>
                <div className="wrapper">
                    <div className="filter-container">
                    </div>
                    <div className="products-container">
                        <ArrayOfProducts products={productsBase.goods} />
                    </div>
                </div>
            </section>
        )
    }


}


export default Main
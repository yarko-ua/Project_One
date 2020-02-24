import React, { Component } from 'react';
import * as productsBase from './../../products.json';
import ArrayOfProducts from './Products/ArrayOfProducts';
import Filter from './Filter/Filter.js';
import { connect } from 'react-redux';

class Main extends Component {
    addToCart = () => {

    }

    FilterSize = (category) => {
        let filtered = category;
        if (this.props.filter.size.length !== 0) {
            return filtered.filter(item => {
                console.log('sizes-', item.size);
                console.log(item.size.some(size => this.props.filter.size.indexOf(size) > -1));
                return item.size.some(size => this.props.filter.size.indexOf(size) > -1)
            }
            );
        }
        return filtered;
    }
    // Чому працює якщо ми не забіндили функцію???????????????????????????????????????????????? бо не використовуэєм this or event??
    FilterPrice = (category) => {
        let filtered = category;
        if (this.props.filter.price === 'Highest') {
            return filtered.sort((a, b) => b.price - a.price);
        } else if (this.props.filter.price === 'Lowest') {
            return filtered.sort((a, b) => a.price - b.price);
        }
        return filtered;
    }

    FilterGender = (category) => {
        let filtered = category;
        if (this.props.filter.gender === 'Male') {
            return filtered.filter(item => item.sex === "Men's");
        } else if (this.props.filter.gender === 'Female') {
            return filtered.filter(item => item.sex === "Women's");
        }
        return filtered;
    }

    FilterBrand = (category) => {
        let filtered = category;
        if (this.props.filter.brand.length !== 0) {
            return filtered.filter(item => {
                console.log('brand-', item.name);
                console.log(this.props.filter.brand.some(brand => item.name.indexOf(brand) > -1));
                return this.props.filter.brand.some(brand => item.name.indexOf(brand) > -1);
            }
            );
        }
        return filtered;
    }


    filter = (category) => {
        let a = category;
        a = this.FilterPrice(a);
        // console.log(a);
        a = this.FilterBrand(a);
        a = this.FilterSize(a);
        // console.log(a);
        a = this.FilterGender(a);
        // console.log(a);
        return a;
    }

    render() {
        const snowboards = productsBase.goods.filter(item => item.category === "Snowboard");
        const bindings = productsBase.goods.filter(item => item.category === "Snowboard Binding");
        const boots = productsBase.goods.filter(item => item.category === "Snowboard Boot");

        console.log(this.props);

        if (this.props.snowboard) {
            return (
                <section className="main">
                    <Filter options={this.props.options} brands={this.props.brands}
                        getOption={this.getFilterOption}
                    />
                    <ArrayOfProducts
                        products={this.filter(snowboards)}
                    />
                </section >
            );
        }
        if (this.props.binding) {
            return (
                <section className="main">
                    <Filter options={this.props.options} brands={this.props.brands}
                        getOption={this.getFilterOption}
                    />
                    <ArrayOfProducts products={this.filter(bindings)} />
                </section>
            );
        }
        if (this.props.boot) {
            return (
                <section className="main">
                    <Filter options={this.props.options} brands={this.props.brands}
                        getOption={this.getFilterOption}
                    />
                    <ArrayOfProducts products={this.filter(boots)} />
                </section>
            );
        }
    }
}

const mapState = props => ({ ...props })
export default connect(mapState)(Main);
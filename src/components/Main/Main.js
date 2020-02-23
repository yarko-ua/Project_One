import React, { Component } from 'react';
import * as productsBase from './../../products.json';
import ArrayOfProducts from './Products/ArrayOfProducts';
import Filter from './Filter/Filter.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
            gender: '',
            brand: [],
            size: [],
            shoppingCart: [],
        }
        this.getFilterOption = this.getFilterOption.bind(this);
        // this.useFilter = this.useFilter.bind(this);
        // this.FilterSize = this.FilterSize.bind(this);
        // this.FilterPrice = this.FilterPrice.bind(this);
        // this.FilterGender = this.FilterGender.bind(this);
        // this.FilterBrand = this.FilterBrand.bind(this);
    }

    getFilterOption(e) {
        let getValue = e.target.innerText;
        let result;
        if (parseFloat(getValue) > 0 ||
            (getValue === 'S' || getValue === 'XS' || getValue === 'M' ||
                getValue === 'L' || getValue === 'XL')) {
            let value = parseFloat(getValue);
            result = getValue;
            if (!isFinite(value)) {
                result = getValue;
            } else {
                result = parseFloat(getValue).toString();
            }
            if (this.state.size.length === 0) {
                this.setState({ size: [result] })
            } else {
                let prevState = [...this.state.size];
                this.setState({ size: [...prevState, result] })
            }
        } else if (getValue === 'Highest' || getValue === 'Lowest') {
            result = getValue;
            this.setState({ price: result })
        } else if (getValue === 'Male' || getValue === 'Female') {
            result = getValue;
            this.setState({ gender: result })
        } else {
            result = getValue;
            this.setState({ brand: result })
        };
        console.log(result);
        setTimeout(() => console.log(this.state), 0);
    }

    FilterSize = (category) => {
        let filtered = category;
        if (this.state.size.length !== 0) {
            return filtered.filter(item => item.size.includes(this.state.size[0]));
        }
        return filtered;
    }
    // Чому працює якщо ми не забіндили функцію???????????????????????????????????????????????? бо не використовуэєм this or event??
    FilterPrice = (category) => {
        let filtered = category;
        if (this.state.price === 'Highest') {
            return filtered.sort((a, b) => b.price - a.price);
        } else if (this.state.price === 'Lowest') {
            return filtered.sort((a, b) => a.price - b.price);
        } else {
            return filtered;
        }
    }

    FilterGender = (category) => {
        let filtered = category;
        if (this.state.gender === 'Male') {
            return filtered.filter(item => item.sex === "Men's");
        } else if (this.state.gender === 'Female') {
            return filtered.filter(item => item.sex === "Women's");
        } else {
            return filtered;
        }
    }

    FilterBrand = (category) => {
        let filtered = category;
        if (this.state.brand.length !== 0) {
            return filtered.filter(item => item.name === this.state.brand)
        } else {
            return filtered;
        }
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


export default Main
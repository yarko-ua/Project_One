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
            brand: '',
            size: ''
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
        if (parseFloat(getValue) > 0) {
            result = parseFloat(getValue);
            this.setState({ size: result })
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
        // console.log(this.filter.size);
        // this.setFilterOption(result);
        setTimeout(() => console.log(this.state), 0);
    }

    // setFilterOption(result) {
    //  let state = { ...this.state.filter };
    //  if (isFinite(result)) {
    //  this.setState({ size: result })
    //   ;}

    FilterSize = (category) => {
        let filtered = category;
        if (this.state.size !== '') {
            return filtered = filtered.filter(item => {
                let size = item.size.map(item => parseFloat(item));
                // console.log(item.size);
                console.log(size);
                console.log(size.includes(this.state.size));
                return size.includes(this.state.size);
            });
        } else {
            return filtered;
        }
    }
    // Чому працює якщо ми не забіндили функцію????????????????????????????????????????????????
    FilterPrice = (category) => {
        let filtered = category;
        if (this.state.price === 'Highest') {
            return filtered = filtered.sort((a, b) => b.price - a.price);
        } else if (this.state.price === 'Lowest') {
            return filtered = filtered.sort((a, b) => a.price - b.price);
        } else {
            return filtered;
        }
    }

    FilterGender = (category) => {
        let filtered = category;
        if (this.state.gender === 'Male') {
            return filtered = filtered.filter(item => item.sex === "Men's");
        } else if (this.state.gender === 'Female') {
            return filtered = filtered.filter(item => item.sex === "Women's");
        } else {
            return filtered;
        }
    }

    FilterBrand = (category) => {
        let filtered = category;
        if (this.state.brand !== '') {
            return filtered = filtered.filter(item => item.name === this.state.brand)
        } else {
            return filtered;
        }
    }

    // useFilter(category) {
    //     let a;
    //     return a = this.FilterSize(category);
    //     this.FilterPrice(category);
    //     this.FilterGender(category);
    //     this.FilterBrand(category);

    // };



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
                        products={this.FilterSize(snowboards)}
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
                    <ArrayOfProducts products={this.FilterSize(bindings)} />
                </section>
            );
        }
        if (this.props.boot) {
            return (
                <section className="main">
                    <Filter options={this.props.options} brands={this.props.brands}
                        getOption={this.getFilterOption}
                    />
                    <ArrayOfProducts products={this.FilterGender(boots)} />
                </section>
            );
        }
    }
}


export default Main
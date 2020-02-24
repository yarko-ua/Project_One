import React, { Component } from "react";
import Input from "../Input/Input";
import { connect } from 'react-redux';
import { FilterPrice, FilterSize, FilterGender, FilterBrand } from './../../../actions/actions';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: '',
        }
    }
    toggleOptions = (e) => {
        if (e.target.parentNode.className === '') {
            e.target.parentNode.classList.add('active')
        } else if (e.target.parentNode.className === 'active') {
            e.target.parentNode.classList.remove('active')
        }
        // setTimeout(() => console.log(state.optionsIsOpened), 100);
    }

    // handlePrice = () => {
    //     this.props.FilterPrice(this.state.option);
    // }


    render() {
        return (
            <div className="filter-container" >
                <Input title="Price" type="radio" name="price"
                    options={["Highest", "Lowest"]}
                    toggle={this.toggleOptions}
                    getOption={this.props.getOption}
                    handleClick={this.props.FilterPrice}
                />
                <Input title="Gender" type="radio" name="gender"
                    options={["Male", "Female"]}
                    toggle={this.toggleOptions}
                    getOption={this.props.getOption}
                    handleClick={this.props.FilterGender}
                />
                <Input title="Brand" type="checkbox" name="brand"
                    options={this.props.brands}
                    toggle={this.toggleOptions}
                    getOption={this.props.getOption}
                    handleClick={this.props.FilterBrand}
                />
                <Input title="Size" type="checkbox" name="size"
                    options={this.props.options}
                    toggle={this.toggleOptions}
                    getOption={this.props.getOption}
                    handleClick={this.props.FilterSize}
                />
            </div>
        );
    }
}
const mapState = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    FilterPrice: content => dispatch(FilterPrice(content)),
    FilterGender: content => dispatch(FilterGender(content)),
    FilterBrand: content => dispatch(FilterBrand(content)),
    FilterSize: content => dispatch(FilterSize(content))
});
export default connect(mapState, mapDispatchToProps)(Filter)
import React, { Component } from "react";
import Input from "./Input/Input";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            // optionsIsOpened: false
        };
        this.toggleOptions = this.toggleOptions.bind(this);
    }

    toggleOptions(e) {
        // let state = this.state.optionsIsOpened;
        // this.setState({ optionsIsOpened: !state, })
        // state = this.state.optionsIsOpened;
        if (e.target.parentNode.className === '') {
            e.target.parentNode.classList.add('active')
        }
        else if (e.target.parentNode.className === 'active') {
            e.target.parentNode.classList.remove('active')
        }
        // setTimeout(() => console.log(this.state.optionsIsOpened), 100);

    }

    render() {
        return (
            <>
                <Input title="Price" type="radio" name="price"
                    options={["Highest", "Lowest"]}
                    toggle={this.toggleOptions}
                />
                <Input title="Gender" type="radio" name="gender"
                    options={["Male", "Female"]}
                    toggle={this.toggleOptions}
                />
                <Input title="Brand" type="checkbox" name="brand"
                    options={["Burton", "LibTech", "Ride", "Capita", "Union"]}
                    toggle={this.toggleOptions}
                />
                <Input title="Size" type="checkbox" name="size"
                    options={["XS", "S", "M", "L", "XL", "152cm", "155cm", "160cm", "7.0", "7.5", "8.0", "8.5", "9.0", "9.5"]}
                    toggle={this.toggleOptions}
                />
            </>
        )
    }
}

export default Filter
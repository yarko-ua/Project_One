import React, { Component } from "react";
import Input from "./Input/Input";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.showOptions = this.showOptions.bind(this);
    }

    showOptions(e) {
        console.log(this.state.options);
    }

    render() {
        // let options = { name: ["Highest", "Lowest"] };
        return (
            <>
                <Input title="Price" type="radio" name="price"
                    options={["Highest", "Lowest"]}
                />
                <Input title="Gender" type="radio" name="gender"
                    options={["Male", "Female"]}
                />
                <Input title="Brand" type="checkbox" name="brand"
                    options={["Burton", "LibTech", "Ride", "Capita", "Union"]}

                />
                <Input title="Size" type="checkbox" name="size"
                    options={["XS", "S", "M", "L", "XL", "152cm", "155cm", "160cm", "7.0", "7.5"]}

                />
            </>
        )
    }
}

export default Filter
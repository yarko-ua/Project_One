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
            </>
        )
    }
}

export default Filter
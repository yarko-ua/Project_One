import React from "react";
import Input from "./Input/Input";


function Filter(props) {

    let toggleOptions = (e) => {
        // let state = state.optionsIsOpened;
        // setState({ optionsIsOpened: !state, })
        // state = state.optionsIsOpened;

        if (e.target.parentNode.className === '') {
            e.target.parentNode.classList.add('active')
        } else if (e.target.parentNode.className === 'active') {
            e.target.parentNode.classList.remove('active')
        }
        // setTimeout(() => console.log(state.optionsIsOpened), 100);
    }

    return (
        <div className="filter-container">
            <Input title="Price" type="radio" name="price"
                options={["Highest", "Lowest"]}
                toggle={toggleOptions}
                getOption={props.getOption}
            />
            <Input title="Gender" type="radio" name="gender"
                options={["Male", "Female"]}
                toggle={toggleOptions}
                getOption={props.getOption}
            />
            <Input title="Brand" type="checkbox" name="brand"
                options={props.brands}
                toggle={toggleOptions}
                getOption={props.getOption}
            />
            <Input title="Size" type="checkbox" name="size"
                options={props.options}
                toggle={toggleOptions}
                getOption={props.getOption}
            />
        </div>
    );

}

export default Filter
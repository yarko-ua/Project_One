import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
        this.toggleOptions = this.toggleOptions.bind(this);
    };

    toggleOptions(e) {
        this.setState({ isOpened: !this.state.isOpened, })
        if (this.state.isOpened) {
            e.target.parentNode.classList.add('active')
        } else {
            e.target.parentNode.classList.remove('active')
        }
        setTimeout(console.log(this.state.isOpened, e.target), 2000);
    };
    render() {
        return (
            <>
                <div className="filters">
                    <form >
                        <fieldset>
                            <legend onClick={this.toggleOptions}>{this.props.title}</legend>
                            {this.props.options.map((option, index) => (
                                <label key={index}><input name={this.props.name} type={this.props.type} />{option}</label>
                            ))}
                        </fieldset>
                    </form>
                </div>
            </>
        );
    };

}
export default Input
import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
        this.toggleOptions = this.toggleOptions.bind(this);
    };

    toggleOptions() {
        this.setState({ isOpened: !this.state.isOpened, })
    };
    render() {
        // let showOpt = null;
        // if (this.state.isOpened) {
        //     showOpt;
        // }
        console.log(this.props.options);
        return (
            <>
                <div className="filters">
                    <span onClick={this.toggleOptions}>{this.props.title}</span>
                    {this.props.options.map((option, index) => (
                        <label key={index}><input name={this.props.name} type={this.props.type} />{option}</label>
                    ))
                    }
                </div>
            </>
        );
    };

}
export default Input
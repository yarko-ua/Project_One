import React from 'react';
// import { FilterPrice } from './../../../actions/actions';
// import { connect } from 'react-redux';


function Input(props) {

    return (
        <>
            <div className="filters">
                <form>
                    <fieldset>
                        <legend onClick={props.toggle}>{props.title}</legend>
                        {props.options.map((option, index) => (
                            <>
                                <input
                                    key={index}
                                    name={props.name}
                                    type={props.type}
                                    id={index + '' + option}
                                />
                                <label
                                    key={option + '_' + index}
                                    htmlFor={index + '' + option}
                                    // onClick={props.getOption}
                                    onClick={() => props.handleClick(option)}
                                >
                                    {option}
                                </label>
                            </>
                        ))}
                    </fieldset>
                </form>
            </div>
        </>
    );
}

// const mapState = state => ({ ...state });
// const mapDispatchToProps = dispatch => ({
//     FilterPrice: content => dispatch(FilterPrice(content))
// });
export default Input
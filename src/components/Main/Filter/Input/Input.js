import React from 'react';

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
                                    name={props.name}
                                    type={props.type}
                                    id={index + '' + option}
                                />
                                <label
                                    key={option + '_' + index}
                                    htmlFor={index + '' + option}
                                    onClick={props.getOption}
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
export default Input
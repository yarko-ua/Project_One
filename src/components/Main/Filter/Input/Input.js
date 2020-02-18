import React from 'react';

function Input(props) {

    return (
        <>
            <div className="filters">
                <form>
                    <fieldset>
                        <legend onClick={props.toggle}>{props.title}</legend>
                        {props.options.map((option, index) => (
                            <label key={index}><input name={props.name} type={props.type} />{option}</label>
                        ))}
                    </fieldset>
                </form>
            </div>
        </>
    );


}
export default Input
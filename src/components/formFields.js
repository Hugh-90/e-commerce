import React, {Component} from "react";

export class FormInput extends Component {
    render() {
        const {className} = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className="form-input__label">{title}</label>
                <input className="form-input__input" type={type} placeholder={placeholder} {...input}/>
            </div>
        )
    }
}
import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from "../details.js";

import history from '../../history';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title:"Not Registered? Create account here",
                onClick: () => history.push("/signup")
            },
            {
                _id: 1,
                title:"Forgot account email?",
                onClick: () => console.log("forgot email")
            },
            {
                _id: 2,
                title:"Forgot password?",
                onClick: () => console.log("forgot password")
            }
        ];
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}/>
                <Field className='sign-in-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}/>

                <div className="sign-in-form__line"></div>
                <Field className='sign-in-form__login'
                onClick={() => history.push("/account")}
                type='submit'
                title='Login'
                name='login'
                component={FormButton}/>
                <Field className='sign-in-form__back'
                onClick={() => history.push("/signin")}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>
                <Details className="sign-in-form__details" title="Quicklinks" links={links}/>
            </form>
        )
    }
}
SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;
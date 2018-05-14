import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if (password.length < 9) {
            return this.setState({
                error: 'Password must be more than 8 characters wrong.'
            });
        }

        Accounts.createUser({email, password}, (error) => {
            if (error) {
                this.setState({
                    error: error.reason
                });
            } else {
                this.setState({
                    error: ''
                });
            }
        });
    }

    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view-box">
                    <h1>Join Short Lnk</h1>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view-form">
                        <input type="email" ref="email" name="email" placeholder="Email" />
                        <input type="password" ref="password" name="password" placeholder="Password" />
                        <button className="button">Create Account</button>
                    </form>
                    <Link to="/">Already have an account</Link>
                </div>
            </div>
        );
    }
};
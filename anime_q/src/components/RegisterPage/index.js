import React from 'react';
import styles from './index.module.css'
import Button from '../Button/index.js'
import Input from '../Input/index.js'

class RegisterPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            login: '',
            password: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className={styles.login_form}>
                <div className={styles.inputs}>
                    <p>Email: <Input name="email" type="email" placeholder="Email"
                                     onChange={this.handleInputChange} value={this.state.email}/></p>
                    <p>Login: <Input name="login" placeholder="Login"
                                     onChange={this.handleInputChange} value={this.state.login}/></p>
                    <p>Password: <Input name="password" type="password" placeholder="Password"
                                        onChange={this.handleInputChange} value={this.state.password}/></p>
                </div>

                <Button onClick={this.handleSubmit}>Register</Button>
            </form>
        )
    }
}

export default RegisterPage;
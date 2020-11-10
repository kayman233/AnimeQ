import React from 'react';
import styles from './index.module.css'
import Button from '../Button/index.js'
import Input from '../Input/index.js'
import { loginAction } from "../../actions/user";
import { connect } from 'react-redux'

class LoginPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorText: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        this.setState({
            errorText: ''
        });
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password)
            .then(() =>{
                if (this.props.error !== null) {
                    this.setState({
                        errorText: this.props.error
                    });
                }
            })
    }

    render() {
        return (
            <form className={styles.loginForm}>
                <div className={styles.inputs}>
                    <p>Email: <Input name="email" type="email" placeholder="Login"
                                     onChange={this.handleInputChange} value={this.state.email}/></p>
                    <p>Password: <Input name="password" type="password" placeholder="Password"
                                        onChange={this.handleInputChange} value={this.state.password}/></p>
                </div>
                <Button onClick={this.handleSubmit}>Log in</Button>
                <p className={styles.error}>{this.state.errorText}</p>
            </form>
        )
    }
}

const mapStateToProps = function(state) {
    return { error: state.user.error }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (...args) => dispatch(loginAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
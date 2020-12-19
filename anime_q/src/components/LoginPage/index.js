import React from 'react';
import styles from './index.module.css'
import Button from '../Button/index.js'
import Input from '../Input/index.js'
import { loginAction } from "../../actions/user";
import { connect } from 'react-redux'
import {clearAnimes} from "../../actions/page";

class LoginPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
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
        this.props.clearAnimes().then(() => {
            this.props.login(this.state.username, this.state.password)
                .then(() =>{
                    if (this.props.error !== null) {
                        this.setState({
                            errorText: this.props.error.response.data.message
                        });
                    } else {

                    }
                })
        });
    }

    render() {
        return (
            <form className={styles.loginForm}>
                <div className={styles.inputs}>
                    <p>Login: <Input name="username" type="text" placeholder="Login"
                                     onChange={this.handleInputChange} value={this.state.username}/></p>
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
        login: (...args) => dispatch(loginAction(...args)),
        clearAnimes: (...args) => dispatch(clearAnimes(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
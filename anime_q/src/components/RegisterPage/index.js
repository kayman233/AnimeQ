import React from 'react';
import styles from './index.module.css'
import Button from '../Button/index.js'
import Input from '../Input/index.js'
import { signupAction } from "../../actions/user";
import { connect } from 'react-redux'

class RegisterPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            login: '',
            password: '',
            errorText: '',
            doneText: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        this.setState({
            errorText: '',
            doneText: ''
        });
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        this.setState({
            errorText: '',
            doneText: ''
        });
        event.preventDefault();
        this.props.signup(
            this.state.email,
            this.state.login,
            this.state.password).then( () => {
                if (this.props.error !== null) {
                    console.log(this.props.error, 'error');
                    this.setState({
                        email: '',
                        login: '',
                        password: '',
                        errorText: this.props.error.response.data.message
                    });
                } else {
                    this.setState({
                        email: '',
                        login: '',
                        password: '',
                        doneText: "Registration done"
                    });
                }
            }
        );
    }

    render() {
        return (
            <form className={styles.loginForm}>
                <div className={styles.inputs}>
                    <p>Email: <Input name="email" type="email" placeholder="Email"
                                     onChange={this.handleInputChange} value={this.state.email}/></p>
                    <p>Login: <Input name="login" placeholder="Login"
                                     onChange={this.handleInputChange} value={this.state.login}/></p>
                    <p>Password: <Input name="password" type="password" placeholder="Password"
                                        onChange={this.handleInputChange} value={this.state.password}/></p>
                </div>

                <Button onClick={this.handleSubmit}>Register</Button>
                <div className={styles.error}>
                    {this.state.errorText}
                </div>
                <div className={styles.done}>
                    {this.state.doneText}
                </div>
            </form>
        )
    }
}

const mapStateToProps = function(state) {
    return { error: state.user.error }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (...args) => dispatch(signupAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
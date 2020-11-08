import React from 'react';
import styles from './index.module.css'
import Button from '../Button/index.js'
import Input from '../Input/index.js'

function RegisterPage() {
    return (
        <form className={styles.login_form}>
            <div className={styles.inputs}>
                <p>Email: <Input name="email" type="email" placeholder="Login"/></p>
                <p>Login: <Input name="login" placeholder="Login"/></p>
                <p>Password: <Input name="password" type="password" placeholder="Password"/></p>
            </div>

            <Button onClick={()=>{}}>Register</Button>
        </form>
    )
}

export default RegisterPage;
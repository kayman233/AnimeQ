import React from 'react';
import styles from './index.module.css'
import Button from '../Button/index.js'
import Input from '../Input/index.js'

function LoginPage() {
    return (
        <form className={styles.login_form}>
            <div className={styles.inputs}>
                <p>Email: <Input name="email" type="email" placeholder="Login"/></p>
                <p>Password: <Input name="password" type="password" placeholder="Password"/></p>
            </div>

            <Button onClick={()=>{}}>Log in</Button>
        </form>
    )
}

export default LoginPage;
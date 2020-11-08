import React from 'react';
import Button from '../../Button/index.js'
import styles from './index.module.css'
import { useHistory } from "react-router-dom";

function UnloggedNav() {
    const history = useHistory();
    return (
        <nav className={styles.nav}>
            <div className={styles.buttons}>
                <Button onClick={()=>{history.push('/register')}}>Join us</Button>
                <Button onClick={()=>{history.push('/login')}}>Log in</Button>
            </div>
        </nav>
    )
}

export default UnloggedNav;
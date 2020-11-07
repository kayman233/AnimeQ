import React from 'react';
import Button from '../../Button/index.js'
import Profile from '../Profile/index.js'
import styles from './index.module.css'

function UnloggedNav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.buttons}>
                <Button onClick={()=>{}}>Join us</Button>
                <Button onClick={()=>{}}>Log in</Button>
            </div>
        </nav>
    )
}

export default UnloggedNav;
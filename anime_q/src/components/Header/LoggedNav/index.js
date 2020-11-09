import React from 'react';
import Button from '../../Button/index.js'
import Profile from '../Profile/index.js'
import styles from './index.module.css'
import { useHistory } from "react-router-dom";

function LoggedNav() {
    const history = useHistory();
    return (
        <nav className={styles.nav}>
            <div className={styles.buttons}>
                <Button onClick={()=>{history.push('/explore')}}>Explore</Button>
                <Button onClick={()=>{history.push('/')}}>My queue</Button>
            </div>
            <Profile/>
        </nav>
    )
}

export default LoggedNav;
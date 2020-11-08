import React from 'react';
import Button from '../../Button/index.js'
import Profile from '../Profile/index.js'
import styles from './index.module.css'
import { useHistory } from "react-router-dom";

function LoggedNav(props) {
    const history = useHistory();
    const profileName = 'kayman233';
    return (
        <nav className={styles.nav}>
            <div className={styles.buttons}>
                <Button onClick={()=>{history.push('/explore')}}>Explore</Button>
                <Button onClick={()=>{history.push('/')}}>My queue</Button>
            </div>
            <Profile name={profileName} loginHandler={props.loginHandler}/>
        </nav>
    )
}

export default LoggedNav;
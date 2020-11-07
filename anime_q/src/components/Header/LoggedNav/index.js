import React from 'react';
import Button from '../../Button/index.js'
import Profile from '../Profile/index.js'
import styles from './index.module.css'

function LoggedNav(props) {
    const profileName = props.name;
    return (
        <nav className={styles.nav}>
            <div className={styles.buttons}>
                <Button onClick={()=>{}}>Explore</Button>
                <Button onClick={()=>{}}>My queue</Button>
            </div>
            <Profile name={profileName}/>
        </nav>
    )
}

export default LoggedNav;
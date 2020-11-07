import React from 'react';
import styles from './index.module.css'
import LoggedNav from './LoggedNav/index.js'
import UnloggedNav from './UnloggedNav/index.js'

function Header() {
    const profileName = 'kayman233'
    let isLogged = false;
    let nav;
    if (isLogged) {
        nav = <LoggedNav name={profileName}/>
    } else {
        nav = <UnloggedNav/>
    }
    return (
        <header className={styles.header}>
            <h1>AnimeQ</h1>
            {nav}
        </header>
    )
}

export default Header;
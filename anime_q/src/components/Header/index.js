import React from 'react';
import styles from './index.module.css'
import LoggedNav from './LoggedNav/index.js'
import UnloggedNav from './UnloggedNav/index.js'
import { useHistory } from "react-router-dom";

function Header(props) {
    const history = useHistory();
    const isLogged = props.isLogged;
    return (
        <header className={styles.header}>
            <h1 onClick={event => {event.preventDefault(); history.push('/')}}>AnimeQ</h1>
            {isLogged ? <LoggedNav loginHandler={props.loginHandler}/>: <UnloggedNav/>}
        </header>
    )
}

export default Header;
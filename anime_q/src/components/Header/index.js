import React from 'react';
import styles from './index.module.css'
import LoggedNav from './LoggedNav/index.js'
import UnloggedNav from './UnloggedNav/index.js'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
    const history = useHistory();
    const isLogged = props.user !== null;
    return (
        <header className={styles.header}>
            <h1 onClick={event => {event.preventDefault(); history.push('/')}}>AnimeQ</h1>
            {isLogged ? <LoggedNav/>: <UnloggedNav/>}
        </header>
    )
}

const mapStateToProps = function(state) {
    return { user: state.user.user }
}

export default connect(mapStateToProps)(Header);
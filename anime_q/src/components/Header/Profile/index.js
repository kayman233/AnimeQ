import React from 'react';
import styles from './index.module.css'
import { connect } from "react-redux";
import { logoutAction } from "../../../actions/user";

function Profile(props) {
    const name = props.user.nickname;

    const logout = () => {
        props.logout().then(()=>{
            console.log("logout");
        })
    }

    return (
        <div className={styles.profileMenu}>
            <div className={styles.profile}>
                <p className={styles.profileName} title={name}>{name}</p>
                <img className={styles.avatar}
                     src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
                     alt='profile'/>
            </div>
            <ul className={styles.submenu}>
                <li><img className={styles.img}
                         src="https://img.icons8.com/material/48/000000/export--v1.png"
                         onClick={event => {event.preventDefault(); logout()}}
                         alt="logout"/></li>
            </ul>
        </div>
    )
}

const mapStateToProps = function(state) {
    return { user: state.user.user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (...args) => dispatch(logoutAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
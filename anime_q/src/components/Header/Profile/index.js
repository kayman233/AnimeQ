import React from 'react';
import styles from './index.module.css'

function Profile(props) {
    console.log(props);
    const name = props.name;
    return (
        <div className={styles.profile_menu}>
            <div className={styles.profile}>
                <p className={styles.profile_name} title={name}>{name}</p>
                <img className={styles.avatar} src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt='profile'/>
            </div>
            <ul className={styles.submenu}>
                <li><img className={styles.img}
                         src="https://img.icons8.com/material/48/000000/export--v1.png"
                         onClick={event => {event.preventDefault(); props.loginHandler(false)}}
                         alt="logout"/></li>
            </ul>
        </div>
    )
}

export default Profile;
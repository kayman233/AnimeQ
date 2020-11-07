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
                <li><img src="./logout.png"/></li>
                <li><img src="./settings.png"/></li>
            </ul>
        </div>
    )
}

export default Profile;
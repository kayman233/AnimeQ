import React from 'react';
import styles from './index.module.css'

function Tile(props) {
    // подсчет времени
    const anime_info = props.info;
    return (
        <div className={styles.tile}>
            <div className={styles.anime_info}>
                <img className={styles.anime_img}></img>
                <div className={styles.anime_description}>
                    <h2 className={styles.anime_name}>
                        {anime_info.name}
                    </h2>
                    <span class={styles.episode_num}>
                        {anime_info.nextEp}th episode
                    </span>
                    <div className={styles.views}>
                        <span className={styles.rank}>{anime_info.rank}st<br/>
                            <span className={styles.rank_text}>most<br/>popular</span>
                        </span>
                        <span className={styles.watching_text}>{anime_info.viewers} watching</span>
                    </div>
                </div>
            </div>
            <div className={styles.time_info}>
                <p className={styles.time_start}>
                    Starts in
                </p>
                <p className={styles.time_left}>
                    {anime_info.date} hours
                </p>
                <p className={styles.time}>
                    13.06.2020 {anime_info.date}am
                </p>
            </div>
            <div className={styles.remove_button}></div>
        </div>
    )
}

export default Tile;
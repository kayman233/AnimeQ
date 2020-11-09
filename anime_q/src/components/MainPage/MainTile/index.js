import React from 'react';
import styles from './index.module.css'

function Tile(props) {
    console.log("proccessTile");
    const anime_info = props.info;
    console.log("proccessTile");
    console.log(anime_info);
    const anime_date = new Date();
    const daysDiff = "5 days";
    /*const current_date = new Date();
    const anime_date = new Date(anime_info.date.year,
                                anime_info.date.month,
                                anime_info.date.day,
                                anime_info.date.hour,
                                anime_info.date.minute);
    const timeDiff = anime_date.getDate() - current_date.getDate();
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    */
    return (
        <div className={styles.tile}>
            <div className={styles.anime_info}>
                <img className={styles.anime_img}></img>
                <div className={styles.anime_description}>
                    <h2 className={styles.anime_name}>
                        {anime_info.name}
                    </h2>
                    <span className={styles.episode_num}>
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
                    5 days
                </p>
                <p className={styles.time}>
                    13.06.2000
                </p>
            </div>
            <div className={styles.remove_button}/>
        </div>
    )
}

export default Tile;
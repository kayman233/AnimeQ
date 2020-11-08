import React from 'react';
import styles from './index.module.css'

function Tile(props) {
    // подсчет времени
    const anime_info = props.info;
    return (
        <div className={styles.tile}>
            <div className={styles.anime_info}>
                <div className={styles.views}>
                    <span className={styles.rank}>{anime_info.rank}st<br/>
                        <span className={styles.rank_text}>most<br/>popular</span>
                    </span>
                    <span className={styles.watching_text}>{anime_info.viewers} watching</span>
                </div>
                <img className={styles.anime_img}></img>
                <div className={styles.anime_description_wrapper}>
                    <h2 className={styles.anime_name}>
                        {anime_info.name}
                    </h2>
                    <div className={styles.anime_main_info}>
                        <div className={styles.anime_description}>
                            {anime_info.description}
                        </div>
                        <div className={styles.additional_info}>
                            <p className={styles.episodes}>
                                Episodes: {anime_info.episodes}
                            </p>
                            <p className={styles.studio}>
                                Studio: {anime_info.studio}
                            </p>
                            <div className={styles.tags}>
                                {anime_info.tags.map(tag => {
                                    return <span className={styles.tag}>{tag}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.time_info}>
                <div className={styles.add}></div>
                <p className={styles.time_start}>
                    Next episode on
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
import React from 'react';
import styles from './index.module.css'
import Tile from './MainTile/index.js'

const animes = []
const anime1 = {
    name: 'animeName1',
    viewers: 1001,
    rank: 1,
    nextEp: 12,
    date: 1
}

const anime2 = {
    name: 'animeName2',
    viewers: 1002,
    rank: 2,
    nextEp: 12,
    date: 2
}

const anime3 = {
    name: 'animeName3',
    viewers: 1003,
    rank: 3,
    nextEp: 11,
    date: 5
}

animes.push(anime1, anime2, anime3)
function MainPage() {
    console.log(animes)
    return (
        <div className={styles.user_queue}>
            {animes.map(anime => {
                return <Tile info={anime}/>
            })}
        </div>
    )
}

export default MainPage;
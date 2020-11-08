import React from 'react';
import styles from './index.module.css'
import Tile from './ExploreTile/index.js'

const animes = []
const anime1 = {
    name: 'animeName1animeName1animeName1animeName1',
    viewers: 1001,
    rank: 1,
    episodes: 11,
    studio: "studioName",
    tags: ["tag1", "tag2"],
    description: "good animegood animegood animegood animegood animegood animegood animegood animegood animegood animegood animegood animegood animegoodanimegoodanimegoodanimegoodanimegoodanimegoodanimegoodanimegood",
    date: 1
}

const anime2 = {
    name: 'animeName2',
    viewers: 1002,
    rank: 2,
    episodes: 11,
    studio: "studioName",
    tags: ["tag1", "tag2"],
    description: "good anime",
    date: 2
}

const anime3 = {
    name: 'animeName3',
    viewers: 1003,
    rank: 3,
    episodes: 11,
    studio: "studioName",
    tags: ["tag1", "tag2"],
    description: "good anime",
    date: 5
}

animes.push(anime1, anime2, anime3)
function ExplorePage() {
    console.log(animes)
    return (
        <div className={styles.user_queue}>
            {animes.map(anime => {
                return <Tile info={anime}/>
            })}
        </div>
    )
}

export default ExplorePage;
import React from 'react';
import styles from './index.module.css'
import Tile from './MainTile/index.js'
import {connect} from "react-redux";
import {userAnimesAction} from "../../actions/page";

function MainPage(props){
    props.getUserAnimes(props.user.email);
    const animes = props.animes.slice();
    //animes.sort(compareAnime);
    console.log("start map")
    return (
        <div className={styles.user_queue}>
            {animes.map(anime => {
                return <Tile key={anime.id} info={anime}/>
            })}
        </div>
    )
}

const mapStateToProps = function(state) {
    return { user: state.user.user,
             animes: state.animes.animes }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserAnimes: (...args) => dispatch(userAnimesAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


/*
function compareAnime(anime1, anime2) {
    const anime1Date = new Date(anime1.date.year,
        anime1.date.month,
        anime1.date.day,
        anime1.date.hour,
        anime1.date.minute);

    const anime2Date = new Date(anime2.date.year,
        anime2.date.month,
        anime2.date.day,
        anime2.date.hour,
        anime2.date.minute);

    return anime1Date.getDate() < anime2Date.getDate();
}
 */
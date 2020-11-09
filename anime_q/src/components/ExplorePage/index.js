import React from 'react';
import styles from './index.module.css'
import Tile from './ExploreTile/index.js'
import {userAnimesAction} from "../../actions/page";
import {connect} from "react-redux";

function ExplorePage(props) {
    console.log(animes)
    return (
        <div className={styles.user_queue}>
            {animes.map(anime => {
                return <Tile info={anime}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
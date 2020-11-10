import React from 'react';
import styles from './index.module.css'
import { deleteAnimeAction } from "../../../actions/page";
import { connect } from "react-redux";

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animeInfo: props.info
        }

        this.deleteTile = this.deleteTile.bind(this);
        this.valueNth = this.valueNth.bind(this);
    }

    deleteTile() {
        this.props.delete(this.state.animeInfo.id);
    }

    valueNth(value) {
        if (value > 3 && value < 21) return value + 'th';
        switch (value % 10) {
            case 1:  return value + "st";
            case 2:  return value + "nd";
            case 3:  return value + "rd";
            default: return value + "th";
        }
    }
    
    render() {
        const animeInfo = this.state.animeInfo;
        return (
            <div className={styles.tile}>
                <div className={styles.animeInfo}>
                    <div className={styles.views}>
                        <div className={styles.rank}>
                            {this.valueNth(animeInfo.rank)}<br/>
                            <div
                                className={styles.rankText}>most<br/>popular
                            </div>
                        </div>
                        <div className={styles.watchingText}>
                            {animeInfo.viewers} watching
                        </div>
                    </div>
                    <img className={styles.animeImg} src={animeInfo.img} alt={animeInfo.name}/>
                    <div className={styles.animeDescription}>
                        <h2 className={styles.animeName} title={animeInfo.name}>
                            {animeInfo.name}
                        </h2>
                        <span className={styles.episodeNum}>
                            {this.valueNth(animeInfo.nextEp)} episode
                        </span>
                    </div>
                </div>
                <div className={styles.timeInfo}>
                    <p className={styles.timeStart}>
                        Starts in
                    </p>
                    <p className={styles.timeLeft}>
                        {animeInfo.timeToShow}
                    </p>
                    <p className={styles.time}>
                        {animeInfo.date}
                    </p>
                </div>
                <button className={styles.removeButton} onClick={ () => {this.deleteTile()} }/>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return { user: state.user.user,
             animes: state.page.animes }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (...args) => dispatch(deleteAnimeAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);

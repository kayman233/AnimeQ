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

    dateAsString(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return date.toLocaleDateString("en-US", options);
    }

    getLeftTime(date) {
        const today = new Date();
        const ms = date - today;
        const s = ms / 1000;
        if (s < 1) return `${Math.round(s)} seconds`;
        const min = s / 60;
        if (min < 1) return `${Math.round(s)} seconds`;
        const hour = min / 60;
        if (hour < 1) return `${Math.round(min)} minutes`;
        const day = hour / 24;
        if (day < 1) return `${Math.round(hour)} hour${Math.round(hour) === 1 ? '': 's'}`;
        return `${Math.round(day)} day${Math.round(day) === 1 ? '': 's'}`;
    }
    
    render() {
        const animeInfo = this.state.animeInfo;
        const date = new Date(animeInfo.nextEpDate);
        return (
            <div className={styles.tile}>
                <div className={styles.animeInfo}>
                    <div className={styles.views}>
                        <div className={styles.rank}>
                            {this.valueNth(this.props.rank)}<br/>
                            <div
                                className={styles.rankText}>most<br/>popular
                            </div>
                        </div>
                        <div className={styles.watchingText}>
                            {animeInfo.viewers} watching
                        </div>
                    </div>
                    <img className={styles.animeImg} src={animeInfo.img} alt={animeInfo.animeName}/>
                    <div className={styles.animeDescription}>
                        <h2 className={styles.animeName} title={animeInfo.animeName}>
                            {animeInfo.animeName}
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
                        {this.getLeftTime(date)}
                    </p>
                    <p className={styles.time}>
                        {this.dateAsString(date)}
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

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
    }

    componentWillMount() {
        this.render();
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
        return (
            <div className={styles.tile}>
                <div className={styles.animeInfo}>
                    <div className={styles.views}>
                        <span className={styles.rank}>{this.valueNth(this.state.animeInfo.rank)}<br/>
                            <span className={styles.rankText}>most<br/>popular</span>
                        </span>
                        <span className={styles.watchingText}>{this.state.animeInfo.viewers} watching</span>
                    </div>
                    <img className={styles.animeImg} src={this.state.animeInfo.img} alt={this.state.animeInfo.name}/>
                    <div className={styles.animeDescription}>
                        <h2 className={styles.animeName}>
                            {this.state.animeInfo.name}
                        </h2>
                        <span className={styles.episodeNum}>
                            {this.valueNth(this.state.animeInfo.nextEp)} episode
                        </span>
                    </div>
                </div>
                <div className={styles.timeInfo}>
                    <p className={styles.timeStart}>
                        Starts in
                    </p>
                    <p className={styles.timeLeft}>
                        {this.state.animeInfo.timeToShow}
                    </p>
                    <p className={styles.time}>
                        {this.state.animeInfo.date}
                    </p>
                </div>
                <button className={styles.removeButton} onClick={ () => {this.deleteTile()} }/>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return { user: state.user.user,
             animes: state.animes.animes }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (...args) => dispatch(deleteAnimeAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);

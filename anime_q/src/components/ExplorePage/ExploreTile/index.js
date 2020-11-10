import React from 'react';
import styles from './index.module.css';
import {addAnimeAction, allAnimesAction, deleteAnimeAction} from "../../../actions/page";
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

    processClick() {
        if (this.props.user !== null) {
            if (this.state.animeInfo.hasOwnProperty("added")) {
                this.props.delete(this.state.animeInfo.id).then(() => {
                    this.props.getAllAnimes().then(()=> {});
                });
            } else {
                this.props.add(this.state.animeInfo.id).then(() => {
                    this.props.getAllAnimes().then(()=> {});
                });
            }
        }

    }

    valueNth(value) {
        if (value > 3 && value < 21) return 'th';
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
                    <img className={styles.animeImg} alt={this.state.animeInfo.name} src={this.state.animeInfo.img}/>
                    <div className={styles.animeDescriptionWrapper}>
                        <h2 className={styles.animeName}>
                            {this.state.animeInfo.name}
                        </h2>
                        <div className={styles.animeMainInfo}>
                            <div className={styles.animeDescription}>
                                {this.state.animeInfo.description}
                            </div>
                            <div className={styles.additionalInfo}>
                                <p className={styles.episodes}>
                                    Episodes: {this.state.animeInfo.episodes}
                                </p>
                                <p className={styles.studio}>
                                    Studio: {this.state.animeInfo.studio}
                                </p>
                                <div className={styles.tags}>
                                    {this.state.animeInfo.tags.map(tag => {
                                        return <span className={styles.tag}>{tag}</span>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.timeInfo}>
                    <div className={styles.addRemove} onClick={()=>{this.processClick()}}>
                        {this.state.animeInfo.hasOwnProperty("added") ? "-" : "+"}
                    </div>
                    <p className={styles.timeStart}>
                        Next episode on
                    </p>
                    <p className={styles.time}>
                        {this.state.animeInfo.date}
                    </p>
                </div>
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
        delete: (...args) => dispatch(deleteAnimeAction(...args)),
        add: (...args) => dispatch(addAnimeAction(...args)),
        getAllAnimes: (...args) => dispatch(allAnimesAction(...args)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
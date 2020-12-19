import React from 'react';
import styles from './index.module.css'
import Tile from './MainTile/index.js'
import { connect } from "react-redux";
import { userAnimesAction } from "../../actions/page";

class MainPage extends React.Component{
    componentDidMount() {
        this.props.getUserAnimes(this.props.user.username).then(()=> {});
    }

    render() {
        return this.props.animes ? (
            <div className={styles.user_queue}>
                { this.props.animes.filter(anime => this.props.userAnimes.includes(anime.id))
                    .sort((first, second)=>{
                        const dateFirst = new Date(first.nextEpDate);
                        const dateSecond = new Date(second.nextEpDate);

                        return dateFirst - dateSecond;
                    })
                    .map((anime, index) => <Tile key={anime.id} info={anime}
                                                 rank={this.props.animes.indexOf(anime) + 1}/>) }
            </div>
        ) : null;
    }
}

const mapStateToProps = function(state) {
    return { user: state.user.user,
             animes: state.page.animes,
             userAnimes: state.page.userAnimes}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserAnimes: (...args) => dispatch(userAnimesAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

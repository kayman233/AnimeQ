import React from 'react';
import styles from './index.module.css'
import Tile from './MainTile/index.js'
import { connect } from "react-redux";
import { userAnimesAction } from "../../actions/page";

class MainPage extends React.Component{
    componentWillMount() {
        this.props.getUserAnimes(this.props.user.email).then(()=> {});
    }

    render() {
        return (
            <div className={styles.user_queue}>
                { this.props.animes.map(anime => <Tile key={anime.id} info={anime}/>) }
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
        getUserAnimes: (...args) => dispatch(userAnimesAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

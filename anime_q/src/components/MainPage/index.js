import React from 'react';
import styles from './index.module.css'
import Tile from './MainTile/index.js'
import { connect } from "react-redux";
import { userAnimesAction } from "../../actions/page";

class MainPage extends React.Component{
    componentDidMount() {
        this.props.getUserAnimes(this.props.user.email).then(()=> {});
    }

    render() {
        return this.props.animes ? (
            <div className={styles.user_queue}>
                { this.props.animes.map(anime => <Tile key={anime.id} info={anime}/>) }
            </div>
        ) : null;
    }
}

const mapStateToProps = function(state) {
    return { user: state.user.user,
             animes: state.page.animes }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserAnimes: (...args) => dispatch(userAnimesAction(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

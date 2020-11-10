import React from 'react';
import styles from './index.module.css';
import Tile from './ExploreTile/index.js';
import {connect} from "react-redux";
import {allAnimesAction, userAnimesAction} from "../../actions/page";
import {currentUserAction} from "../../actions/user";

class ExplorePage extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchUser().then(() => {
            this.props.getAllAnimes().then(()=> {});
        })
    }

    render() {
        return (
            <div className={styles.userQueue}>
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
        getAllAnimes: (...args) => dispatch(allAnimesAction(...args)),
        getUserAnimes: (...args) => dispatch(userAnimesAction(...args)),
        fetchUser: () => dispatch(currentUserAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
import React, {useState, useEffect} from 'react';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import {connect, Provider} from 'react-redux'
import {currentUserAction} from "../actions/user";

import Header from './Header/index.js'
import Footer from './Footer/index.js'
import MainPage from './MainPage/index.js'
import ExplorePage from './ExplorePage/index.js'
import RegisterPage from './RegisterPage/index.js'
import LoginPage from './LoginPage/index.js'

import styles from './App.module.css'

function App(props) {
    useEffect(() => {
        props.fetchUser()
    }, []);

    const isLogged = props.user !== null;

    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.content}>
                    <Switch>
                        <Route path="/login">{isLogged ?
                                            <Redirect to="/" /> :
                                            <LoginPage/>}
                        </Route>
                        <Route path="/register"><RegisterPage/></Route>
                        <Route path="*">{isLogged ?
                            <MainPage /> : <LoginPage/>}
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

/*
*
*                         <Route path="/explore"><ExplorePage/></Route>

* */

const mapStateToProps = function(state) {
    return { user: state.user.user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(currentUserAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
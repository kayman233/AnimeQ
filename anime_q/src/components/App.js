import React from 'react';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import MainPage from './MainPage/index.js'
import ExplorePage from './ExplorePage/index.js'
import styles from './App.module.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
    let isLogged = false;
    var page;
    if (isLogged) {
        page = <MainPage/>;
    } else {
        page = <ExplorePage/>;
    }
    return (
    <BrowserRouter>
        <div className={styles.wrapper}>
            <Header isLogged={isLogged}/>
            <div className={styles.content}>
                {page}
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
    )
}

export default App;
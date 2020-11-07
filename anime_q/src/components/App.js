import React from 'react';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import styles from './App.module.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.content}>
                
            </div>
            <Footer/>
        </div>
      </BrowserRouter>
    )
}

export default App;
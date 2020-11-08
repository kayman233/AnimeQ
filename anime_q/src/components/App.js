import React from 'react';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import MainPage from './MainPage/index.js'
import ExplorePage from './ExplorePage/index.js'
import RegisterPage from './RegisterPage/index.js'
import LoginPage from './LoginPage/index.js'
import styles from './App.module.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false,
            user: null
        };

        this.changeIsLogged = this.changeIsLogged.bind(this);
    }

    changeIsLogged(isLogged) {
        console.log("change", isLogged)
        this.setState({isLogged});
    }

    render() {
        return (
            <BrowserRouter>
                <div className={styles.wrapper}>
                    <Header isLogged={this.state.isLogged} loginHandler={this.changeIsLogged}/>
                    <div className={styles.content}>
                        <Switch>
                            <Route path="/login">{this.state.isLogged ?
                                                <Redirect to="/" /> :
                                                <LoginPage loginHandler={this.changeIsLogged}/>}
                            </Route>
                            <Route path="/register"><RegisterPage/></Route>
                            <Route path="/explore"><ExplorePage isLogged={this.state.isLogged}/></Route>
                            <Route path="*">{this.state.isLogged ?
                                                <MainPage /> :
                                                <ExplorePage isLogged={this.state.isLogged}/>}
                            </Route>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
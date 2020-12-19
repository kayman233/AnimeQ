import axios from 'axios';

const currentUserObj = {
    user: null
}

const API_BASE_URL = "http://localhost:8080/api/v1";

const query = {
    signup(email, login, password) {
        const user = {};
        user.email = email;
        user.username = login;
        user.password = password;
        return axios.post(API_BASE_URL + '/users', user);
    },
    login(username, password) {
        const user = {};
        user.email = "";
        user.username = username;
        user.password = password;
        return axios.post(API_BASE_URL + '/users/login', user);
    },
    logout() {
        return new Promise(function (resolve, reject) {
            currentUserObj.user = null;
            resolve();
        });
    },
    setCurrentUser(username) {
        return new Promise(function (resolve, reject) {
            currentUserObj.user = {username: username};
            resolve(currentUserObj.user);
        });
    },
    currentUser() {
        return new Promise(function (resolve, reject) {
            resolve(currentUserObj.user);
        });
    },
    userAnimes(username) {
        return axios.get(API_BASE_URL +"/users/username/" + username + "/animes");
    },
    allAnimes() {
        return axios.get(API_BASE_URL + "/animes");
    },
    deleteAnimeFromUserList(animeId) {
        const userAnime = {
            username: currentUserObj.user.username,
            id: animeId};
        return axios.post(API_BASE_URL + "/users/delete_anime", userAnime);
    },
    addAnimeToUserList(animeId) {
        const userAnime = {
            username: currentUserObj.user.username,
            id: animeId
        };
        return axios.post(API_BASE_URL + "/users/add_anime", userAnime)
    },
    clearAnimes() {
        return new Promise(function (resolve, reject) {
            const animes = {data: []}
            resolve(animes);
        });
    }
}

export default query;

const query = {
    signup(email, login, password) {
        const storage = JSON.parse(localStorage.getItem('data'));
        const {animes, users, currentUserObj} = storage.animes;
        return new Promise(function (resolve, reject) {
            if (users.hasOwnProperty(email)) {
                localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
                reject("This email already exists");
            } else {
                users[email] = {
                    email: email,
                    nickname: login,
                    password: password,
                    animeIds: []
                };
                localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
                resolve(null);
            }
        });
    },
    login(email, password) {
        const storage = JSON.parse(localStorage.getItem('data'));
        const {animes, users, currentUserObj} = storage.animes;
        return new Promise(function (resolve, reject) {
            if (!users.hasOwnProperty(email)) {
                localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
                reject("This email doesn't exist");
            } else {
                const user = users[email];
                const actualPassword = user.password;
                if(password === actualPassword) {
                    currentUserObj.user = user;
                    localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
                    resolve(user);
                } else {
                    reject("Wrong password");
                }
            }
        });
    },
    logout() {
        const storage = JSON.parse(localStorage.getItem('data'));
        const {animes, users, currentUserObj} = storage.animes;
        return new Promise(function (resolve, reject) {
            currentUserObj.user = null;
            Object.values(animes).map((anime) => {
                if (anime.hasOwnProperty("added")) {
                    delete anime["added"]
                }
                return anime;
            });
            localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
            resolve();
        });
    },
    currentUser() {
        console.log("current user");
        console.log(JSON.parse(localStorage.getItem('data')));
        const storage = JSON.parse(localStorage.getItem('data'));
        const {animes, users, currentUserObj} = storage.animes;
        return new Promise(function (resolve, reject) {
            localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
            resolve(currentUserObj.user);
        });
    },
    userAnimes(userEmail) {
        const storage = JSON.parse(localStorage.getItem('data'));
        const {animes, users, currentUserObj} = storage.animes;
        return new Promise(function (resolve, reject) {
            const user = users[userEmail];
            const userAnimesIds = user.animeIds;
            const userAnimes = userAnimesIds.map((animeId) => {
                return animes[animeId];
            });
            localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
            resolve(userAnimes);
        });
    },
    allAnimes() {
        const storage = JSON.parse(localStorage.getItem('data'));
        const {animes, users, currentUserObj} = storage.animes;
        return new Promise(function (resolve, reject) {
            const user = currentUserObj.user;
            if (user !== null) {
                const userAnimesIds = user.animeIds;
                const animesUser = Object.values(animes).map((anime) => {
                    if (userAnimesIds.includes(anime.id)) {
                        anime["added"] = true;
                    }
                    return anime;
                });
                localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
                resolve(animesUser);
            } else {
                localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
                resolve(Object.values(animes));
            }
        });
    },
    deleteAnimeFromUserList(animeId) {
        const storage = JSON.parse(localStorage.getItem('data'));
        const {animes, users, currentUserObj} = storage.animes;
        return new Promise(function (resolve, reject) {
            const user = currentUserObj.user;
            const email = user.email;

            users[email].animeIds = users[email].animeIds.filter((item) => item !== animeId);
            delete animes[animeId]["added"];
            const userAnimesIds = currentUserObj.user.animeIds;
            const userAnimes = userAnimesIds.map((animeId) => {
                return animes[animeId];
            });

            currentUserObj.user = users[email];
            localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
            resolve(userAnimes);
        });
    },
    addAnimeToUserList(animeId) {
        const storage = JSON.parse(localStorage.getItem('data'));
        const {animes, users, currentUserObj} = storage.animes;
        return new Promise(function (resolve, reject) {
            const user = currentUserObj.user;
            const email = user.email;

            users[email].animeIds.push(animeId)
            animes[animeId]["added"] = true;
            const userAnimesIds = currentUserObj.user.animeIds;
            const userAnimes = userAnimesIds.map((animeId) => {
                return animes[animeId];
            });

            currentUserObj.user = users[email];
            localStorage.setItem('data', JSON.stringify({animes, users, currentUserObj}));
            resolve(userAnimes);
        });
    }
}

export default query;
const animes = {
    '1': {
        id: 1,
        name: 'Jujutsu Kaisen',
        viewers: 3,
        rank: 1,
        episodes: 24,
        nextEp: 2,
        studio: 'MAPPA',
        tags: [
            'action',
            'horror',
            'school'
        ],
        description: 'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item.',
        date: "11.13.2020 12:00am",
        timeToShow: "5 hours",
        img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg'
    },
    '2': {
        id: 2,
        name: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III',
        viewers: 2,
        rank: 2,
        episodes: 12,
        nextEp: 3,
        studio: 'J.C.Staff',
        tags: [
            'action',
            'comedy',
            'fantasy'
        ],
        description: 'The story follows the exploits of Bell Cranel, a 14-year-old solo adventurer under the goddess Hestia. As the only member of the Hestia Familia, he works hard to make ends meet. He looks up to Ais Wallenstein, a famous and powerful swordswoman who once saved his life, and with whom he fell in love.',
        date: "11.13.2020 1:00am",
        timeToShow: "6 hours",
        img: 'https://cdn.myanimelist.net/images/anime/1523/108380.jpg'
    },
    '3': {
        id: 3,
        name: 'Haikyuu!!: To the Top 2nd Season',
        viewers: 1,
        rank: 3,
        episodes: 12,
        nextEp: 4,
        studio: 'Production I.G',
        tags: [
            'sports',
            'schounen',
            'school'
        ],
        description: 'Karasuno prepares for their first match in the second round against the team that is second favorite to win the tournament, Inarizaki High and their team of unique players. ',
        date: "11.13.2020 2:00pm",
        timeToShow: "7 hours",
        img: 'https://cdn.myanimelist.net/images/anime/1453/106768.jpg'
    }
}

const users = {
    'vanyakudr007@mail.ru': {
        email: 'vanyakudr007@mail.ru',
        nickname: 'kayman',
        password: '12345',
        animeIds: [1, 2]
    },
    'kudriavtsev.iv@phystech.edu': {
        email: 'kudriavtsev.iv@phystech.edu',
        nickname: 'ivankudr',
        password: 'qwerty',
        animeIds: []
    }
}

const currentUserObj = {
    user: null
}

const query = {
    signup(email, login, password) {
        return new Promise(function (resolve, reject) {
            if (email === '' || login === '' || password === '') {
                reject("Fill all inputs");
            }
            if (users.hasOwnProperty(email)) {
                reject("This email already exists");
            } else {
                users[email] = {
                    email: email,
                    nickname: login,
                    password: password,
                    animeIds: []
                };
                resolve(null);
            }
        });
    },
    login(email, password) {
        return new Promise(function (resolve, reject) {
            if (!users.hasOwnProperty(email)) {
                reject("This email doesn't exist");
            } else {
                const user = users[email];
                const actualPassword = user.password;
                if(password === actualPassword) {
                    currentUserObj.user = user;
                    resolve(user);
                } else {
                    reject("Wrong password");
                }
            }
        });
    },
    logout() {
        return new Promise(function (resolve, reject) {
            currentUserObj.user = null;
            resolve();
            Object.values(animes).map((anime) => {
                if (anime.hasOwnProperty("added")) {
                    delete anime["added"]
                }
                return anime;
            });
        });
    },
    currentUser() {
        return new Promise(function (resolve, reject) {
            resolve(currentUserObj.user);
        });
    },
    userAnimes(userEmail) {
        return new Promise(function (resolve, reject) {
            const user = users[userEmail];
            const userAnimesIds = user.animeIds;
            const userAnimes = userAnimesIds.map((animeId) => {
                return animes[animeId];
            });
            resolve(userAnimes);
        });
    },
    allAnimes() {
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
                resolve(animesUser);
            } else {
                resolve(Object.values(animes));
            }
        });
    },
    deleteAnimeFromUserList(animeId) {
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

            resolve(userAnimes);
        });
    },
    addAnimeToUserList(animeId) {
        return new Promise(function (resolve, reject) {
            const user = currentUserObj.user;
            const email = user.email;

            users[email].animeIds.push(animeId);
            users[email].animeIds.sort();
            animes[animeId]["added"] = true;
            const userAnimesIds = currentUserObj.user.animeIds;
            const userAnimes = userAnimesIds.map((animeId) => {
                return animes[animeId];
            });

            currentUserObj.user = users[email];

            resolve(userAnimes);
        });
    }
}

export default query;

const animes = {
    '1': {
        id: 1,
        name: 'Jujutsu Kaisen',
        viewers: 1,
        rank: 1,
        episodes: 24,
        nextEp: 2,
        studio: 'MAPPA',
        tags: [
            'action',
            'horror',
            'school'
        ],
        description: '',
        date: {
            year: 2020,
            month: 11,
            day: 13,
            hour: 12,
            minute: 0
        },
        img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg'
    },
    '2': {
        id: 2,
        name: 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III',
        viewers: 0,
        rank: 3,
        episodes: 12,
        nextEp: 3,
        studio: 'J.C.Staff',
        tags: [
            'action',
            'comedy',
            'fantasy'
        ],
        description: '',
        date: {
            year: 2020,
            month: 11,
            day: 16,
            hour: 12,
            minute: 0
        },
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
        description: '',
        date: {
            year: 2020,
            month: 11,
            day: 21,
            hour: 12,
            minute: 0
        },
        img: 'https://cdn.myanimelist.net/images/anime/1453/106768.jpg'
    }
}

const users = {
    'vanyakudr007@mail.ru': {
            email: 'vanyakudr007@mail.ru',
            nickname: 'kayman',
            password: '12345',
            animeIds: [1]
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
            if (users.hasOwnProperty(email)) {
                reject("This email already exists");
            } else {
                users[email] = {
                    nickname: login,
                    password: password,
                    animeIds: []
                };
                resolve();
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
            console.log("user");
            console.log(user);
            const userAnimesIds = user.animeIds;
            console.log("userAnimesIds");
            console.log(userAnimesIds);
            const userAnimes = userAnimesIds.map((animeId) => {
                console.log("animeId");
                console.log(animeId);
                console.log(animes[animeId]);
                return animes[animeId];
            });
            console.log("userAnimes");
            console.log(userAnimes);
            resolve(userAnimes);
        });
    },
    allAnimes() {
        return new Promise(function (resolve, reject) {
            resolve(animes);
        });
    }
}

export default query;
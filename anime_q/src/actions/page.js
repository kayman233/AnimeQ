import pageService from '../pageService'

function fetchFail(payload) {
    return {
        type: 'PAGE_FAIL',
        payload
    }
}

function fetchSuccess(payload) {
    return {
        type: 'PAGE_SUCCESS',
        payload
    }
}

function fetchUserSuccess(payload) {
    return {
        type: 'USER_PAGE_SUCCESS',
        payload
    }
}

export function userAnimesAction(username) {
    return dispatch => {
        return pageService.userAnimes(username).then((data) => {
            dispatch(fetchUserSuccess(data))
        })
            .catch((error) => {
                dispatch(fetchFail(error))
            })
    }
}

export function allAnimesAction() {
    return dispatch => {
        return pageService.allAnimes().then((data) => {
            dispatch(fetchSuccess(data))
        })
            .catch((error) => {
                dispatch(fetchFail(error))
            })
    }
}

export function deleteAnimeAction(animeId) {
    return dispatch => {
        return pageService.deleteAnimeFromUserList(animeId).then((data) => {
            dispatch(fetchUserSuccess(data))
        })
            .catch((error) => {
                dispatch(fetchFail(error))
            })
    }
}

export function addAnimeAction(animeId) {
    return dispatch => {
        return pageService.addAnimeToUserList(animeId).then((data) => {
            dispatch(fetchUserSuccess(data))
        })
            .catch((error) => {
                dispatch(fetchFail(error))
            })
    }
}

export function clearAnimes() {
    return dispatch => {
        return pageService.clearAnimes().then((data) => {
            dispatch(fetchUserSuccess(data))
        })
            .catch((error) => {
                dispatch(fetchFail(error))
            })
    }
}
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

export function userAnimesAction(userEmail) {
    return dispatch => {
        return pageService.userAnimes(userEmail).then((data) => {
            dispatch(fetchSuccess(data))
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
            dispatch(fetchSuccess(data))
        })
            .catch((error) => {
                dispatch(fetchFail(error))
            })
    }
}

export function addAnimeAction(animeId) {
    return dispatch => {
        return pageService.addAnimeToUserList(animeId).then((data) => {
            dispatch(fetchSuccess(data))
        })
            .catch((error) => {
                dispatch(fetchFail(error))
            })
    }
}
import pageService from '../pageService'

function fetchFail(payload) {
    return {
        type: 'PAGE_FAIL',
        payload
    }
}

function fetchSuccess(payload) {
    console.log("payloadFetch");
    console.log(payload);
    return {
        type: 'PAGE_SUCCESS',
        payload
    }
}

export function userAnimesAction(userEmail) {
    console.log("action");
    console.log(userEmail);
    return dispatch => {
        return pageService.userAnimes(userEmail).then((data) => {
            console.log("data");
            console.log(data);
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
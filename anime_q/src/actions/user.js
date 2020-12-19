import userService from '../userService'

function fetchFail(payload) {
  return {
    type: 'USER_FAIL',
    payload
  }
}

function fetchSuccess(payload) {
  return {
    type: 'USER_SUCCESS',
    payload
  }
}

export function currentUserAction() {
  return dispatch => {
    return userService.currentUser().then((data) => {
      dispatch(fetchSuccess(data))
    })
      .catch((error) => {
        dispatch(fetchFail(error))
      })
  }
}

export function loginAction(username, password) {
  return dispatch => {
    return userService.login(username, password).then((data) => {
      dispatch(fetchSuccess(data));
      userService.setCurrentUser(username).then(() => {});
    })
      .catch((error) => {
        dispatch(fetchFail(error))
      })
  }
}

export function signupAction(email, login, password) {
  return dispatch => {
    return userService.signup(email, login, password).then((data) => {
      dispatch(fetchSuccess(data))
    })
      .catch((error) => {
        dispatch(fetchFail(error))
      })
  }
}

export function logoutAction() {
  return dispatch => {
    return userService.logout().then((data) => {
      dispatch(fetchSuccess(null))
    })
      .catch((error) => {
        dispatch(fetchFail(error))
      })
  }
}

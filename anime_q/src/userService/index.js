import query from "../utils/query";

const UserService = {
  signup(email, login, password) {
    return query.signup(email, login, password);
  },
  login(username, password) {
    return query.login(username, password);
  },
  logout() {
    return query.logout();
  },
  currentUser() {
    return query.currentUser();
  },
  setCurrentUser(username) {
    return query.setCurrentUser(username);
  }
};

export default UserService;

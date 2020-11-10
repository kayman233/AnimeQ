import query from "../utils/query";

const UserService = {
  signup(email, login, password) {
    return query.signup(email, login, password);
  },
  login(email, password) {
    return query.login(email, password);
  },
  logout() {
    return query.logout();
  },
  currentUser() {
    return query.currentUser();
  }
};

export default UserService;

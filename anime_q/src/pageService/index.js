import http from '../utils/http'
import query from "../utils/query";

const PageService = {
  userAnimes(userEmail) {
    console.log("service");
    console.log(userEmail);
    return query.userAnimes(userEmail);
  },
  allAnimes() {
    return query.allAnimes();
  }
};

export default PageService;

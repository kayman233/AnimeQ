import query from "../utils/query";

const PageService = {
  userAnimes(username) {
    return query.userAnimes(username);
  },
  allAnimes() {
    return query.allAnimes();
  },
  deleteAnimeFromUserList(animeId) {
    return query.deleteAnimeFromUserList(animeId);
  },
  addAnimeToUserList(animeId) {
    return query.addAnimeToUserList(animeId);
  },
  clearAnimes() {
    return query.clearAnimes();
  }
};

export default PageService;

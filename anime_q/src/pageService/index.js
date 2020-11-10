import query from "../utils/query";

const PageService = {
  userAnimes(userEmail) {
    return query.userAnimes(userEmail);
  },
  allAnimes() {
    return query.allAnimes();
  },
  deleteAnimeFromUserList(animeId) {
    return query.deleteAnimeFromUserList(animeId);
  },
  addAnimeToUserList(animeId) {
    return query.addAnimeToUserList(animeId);
  }
};

export default PageService;

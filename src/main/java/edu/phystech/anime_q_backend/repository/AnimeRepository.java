package edu.phystech.anime_q_backend.repository;

import edu.phystech.anime_q_backend.model.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Long>{
  @Query(value = "SELECT * FROM anime_system.animes\n" +
                  "ORDER BY viewers DESC",
          nativeQuery = true)
  List<Anime> getAllAnimesByRank();

  @Query(value = "SELECT anime_id FROM anime_system.users_animes\n" +
          "where user_id = (SELECT id FROM anime_system.users\n" +
          "where username = ?)",
          nativeQuery = true)
  List<Long> getUserAnimes(String username);

  @Modifying
  @Transactional
  @Query(value = "delete from anime_system.users_animes ua " +
          "where ua.user_id = (SELECT id FROM anime_system.users\n" +
          "where username = :user) and ua.anime_id = :id_anime", nativeQuery = true)
  void deleteAnime(@Param("user") String username, @Param("id_anime") Long id);

  @Modifying
  @Transactional
  @Query(value = "update anime_system.animes set viewers = viewers - 1\n" +
          "where id = :id_anime", nativeQuery = true)
  void lowerAnime(@Param("id_anime") Long id);

  @Modifying
  @Transactional
  @Query(value = "insert anime_system.users_animes(user_id, anime_id) values" +
          " ((SELECT id FROM anime_system.users\n" +
          "where username = :user), :id_anime)", nativeQuery = true)
  void addAnime(@Param("user") String username, @Param("id_anime") Long id);

  @Modifying
  @Transactional
  @Query(value = "update anime_system.animes set viewers = viewers + 1\n" +
          "where id = :id_anime", nativeQuery = true)
  void riseAnime(@Param("id_anime") Long id);

  Anime findByAnimeName(String name);
}

package edu.phystech.anime_qserver.repository;

import edu.phystech.anime_qserver.model.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Long>{

}

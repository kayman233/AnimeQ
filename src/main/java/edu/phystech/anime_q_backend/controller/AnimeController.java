package edu.phystech.anime_q_backend.controller;

import edu.phystech.anime_q_backend.exception.WrongUserException;
import edu.phystech.anime_q_backend.model.Anime;
import edu.phystech.anime_q_backend.repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class AnimeController {
  @Autowired
  private AnimeRepository animeRepository;

  @GetMapping("/animes")
  public List<Anime> getAllAnimes() {
    return animeRepository.getAllAnimesByRank();
  }

  @RequestMapping(value = "/animes/add_to_base", method = RequestMethod.POST)
  public Anime addNewAnime(@RequestBody Anime anime) {
    Anime found_anime = animeRepository.findByAnimeName(anime.getAnimeName());
    if (found_anime != null) throw new WrongUserException("Anime with name :" +
            anime.getAnimeName() + " already exists");
    return animeRepository.save(anime);
  }
}
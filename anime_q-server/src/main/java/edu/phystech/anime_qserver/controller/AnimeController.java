package edu.phystech.anime_qserver.controller;

import edu.phystech.anime_qserver.model.Anime;
import edu.phystech.anime_qserver.repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class AnimeController {
  @Autowired
  private AnimeRepository animeRepository;

  @GetMapping("/animes")
  public List<Anime> getAllAnimes() {
    return animeRepository.findAll();
  }
}
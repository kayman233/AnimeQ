package edu.phystech.anime_qserver.controller;

import edu.phystech.anime_qserver.exception.ResourceNotFoundException;
import edu.phystech.anime_qserver.model.Anime;
import edu.phystech.anime_qserver.model.User;
import edu.phystech.anime_qserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/")
public class UserController {
  @Autowired
  private UserRepository userRepository;

  @GetMapping("/users")
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  @GetMapping("/users/{id}")
  public ResponseEntity<User> getUserById(@PathVariable Long id) {
    User user = userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User does not exist with id :" + id));
    return ResponseEntity.ok(user);
  }

  @GetMapping("/users/{id}/animes")
  public ResponseEntity<Set<Anime>> getAnimesOfUserById(@PathVariable Long id) {
    User user = userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User does not exist with id :" + id));
    return ResponseEntity.ok(user.getAnimes());
  }
}

package edu.phystech.anime_q_backend.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import edu.phystech.anime_q_backend.exception.ResourceNotFoundException;
import edu.phystech.anime_q_backend.exception.WrongPasswordException;
import edu.phystech.anime_q_backend.exception.WrongUserException;
import edu.phystech.anime_q_backend.model.User;
import edu.phystech.anime_q_backend.repository.AnimeRepository;
import edu.phystech.anime_q_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private AnimeRepository animeRepository;

  @RequestMapping(value = "/users", method = RequestMethod.GET)
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  @RequestMapping(value = "/users/username/{username}", method = RequestMethod.GET)
  public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
    User user = userRepository.findByUsername(username);
    if (user == null) throw new ResourceNotFoundException("User does not exist with username :"
            + username);
    return ResponseEntity.ok(user);
  }

  @RequestMapping(value = "/users/username/{username}/animes", method = RequestMethod.GET)
  public ResponseEntity<List<Long>> getAnimesOfUserByUsername(@PathVariable String username) {
    User user = userRepository.findByUsername(username);
    if (user == null) throw new ResourceNotFoundException("User does not exist with username :"
            + username);
    return ResponseEntity.ok(animeRepository.getUserAnimes(username));
  }

  @RequestMapping(value = "users", method = RequestMethod.POST)
  public User createUser(@RequestBody User user) {
    User found_user = userRepository.findByUsername(user.getUsername());
    if (found_user != null) throw new WrongUserException("User with username :" +
            user.getUsername() + " already exists");
    found_user = userRepository.findByEmail(user.getEmail());
    if (found_user != null) throw new WrongUserException("User with email :" +
            user.getEmail() + " already exists");
    return userRepository.save(user);
  }

  @RequestMapping(value = "users/login", method = RequestMethod.POST)
  public User loginUser(@RequestBody User user) {
    if (user == null) {
      throw new ResourceNotFoundException("No username");
    }
    User found_user = userRepository.findByUsername(user.getUsername());
    if (found_user == null) throw new ResourceNotFoundException("User does not exist with" +
            " username :" + user.getUsername());
    if (!found_user.getPassword().equals(user.getPassword())) {
      throw new WrongPasswordException("Wrong password");
    }

    return found_user;
  }

  @RequestMapping(value = "users/delete_anime", method = RequestMethod.POST)
  public ResponseEntity<List<Long>> deleteAnimeFromUser(@RequestBody ObjectNode objectNode) {
    String username = objectNode.get("username").asText();
    Long id = objectNode.get("id").asLong();
    animeRepository.deleteAnime(username, id);
    animeRepository.lowerAnime(id);
    return ResponseEntity.ok(animeRepository.getUserAnimes(username));
  }

  @RequestMapping(value = "users/add_anime", method = RequestMethod.POST)
  public ResponseEntity<List<Long>> addAnimeToUser(@RequestBody ObjectNode objectNode) {
    String username = objectNode.get("username").asText();
    Long id = objectNode.get("id").asLong();
    animeRepository.addAnime(username, id);
    animeRepository.riseAnime(id);
    return ResponseEntity.ok(animeRepository.getUserAnimes(username));
  }
}

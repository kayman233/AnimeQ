package edu.phystech.anime_q_backend;

import edu.phystech.anime_q_backend.controller.AnimeController;
import edu.phystech.anime_q_backend.controller.UserController;
import edu.phystech.anime_q_backend.exception.WrongUserException;
import edu.phystech.anime_q_backend.model.Anime;
import edu.phystech.anime_q_backend.model.User;
import org.junit.jupiter.api.Test;
import org.junit.Assert;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.doThrow;

@SpringBootTest
class AnimeQBackendApplicationTests {
  @Mock
  UserController mockUserController;

  @Mock
  AnimeController mockAnimeController;

  @Test
  void contextLoads() {
  }

  @Test()
  public void findUser() {
    User actualUser = new User();
    actualUser.setId(1L);
    actualUser.setEmail("vanyakudr007@mail.ru");
    actualUser.setPassword("1234");
    actualUser.setUsername("kayman233");
    ResponseEntity<User> response = ResponseEntity.ok(actualUser);
    Mockito.when(mockUserController.getUserByUsername("kayman233")).thenReturn(response);

    ResponseEntity<User> found = mockUserController.getUserByUsername("kayman233");

    Assert.assertEquals(response, found);
    Mockito.verify(mockUserController).getUserByUsername("kayman233");
  }

  @Test
  public void wrongRegister() {
    User user = new User();
    user.setId(1L);
    user.setEmail("vanyakudr007@mail.ru");
    user.setPassword("1234");
    user.setUsername("kayman233");
    doThrow(new WrongUserException("")).when(mockUserController).createUser(user);
  }

  @Test
  public void wrongAnime() {
    Anime anime = new Anime();
    anime.setAnimeName("Shingeki no Kyojin: The Final Season");
    doThrow(new WrongUserException("")).when(mockAnimeController).addNewAnime(anime);
  }
}

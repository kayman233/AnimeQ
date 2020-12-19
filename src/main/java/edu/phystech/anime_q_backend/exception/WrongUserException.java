package edu.phystech.anime_q_backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Such user already exists")
public class WrongUserException extends RuntimeException{

  private static final long serialVersionUID = 1L;

  public WrongUserException(String message) {
    super(message);
  }
}

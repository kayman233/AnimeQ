package edu.phystech.anime_q_backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Wrong password")
public class WrongPasswordException extends RuntimeException{

  private static final long serialVersionUID = 1L;

  public WrongPasswordException(String message) {
    super(message);
  }
}
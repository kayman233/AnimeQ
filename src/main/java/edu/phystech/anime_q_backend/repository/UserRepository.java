package edu.phystech.anime_q_backend.repository;

import edu.phystech.anime_q_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
  User findByUsername(String username);
  User findByEmail(String email);
}

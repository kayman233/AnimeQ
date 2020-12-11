package edu.phystech.anime_qserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.phystech.anime_qserver.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}

package edu.phystech.anime_q_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
@Data
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "email")
  private String email;

  @Column(name = "username")
  private String username;

  @Column(name = "password")
  private String password;

  @ManyToMany
  @JsonIgnore
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @OrderBy("nextEpDate ASC")
  @JoinTable(name="users_animes",
          joinColumns = @JoinColumn(name="user_id", referencedColumnName="id"),
          inverseJoinColumns = @JoinColumn(name="anime_id", referencedColumnName="id")
  )
  private Set<Anime> animes;
}

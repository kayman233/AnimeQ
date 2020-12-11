package edu.phystech.anime_qserver.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "animes")
@Data
public class Anime {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "anime_name")
  private String animeName;

  @Column(name = "viewers")
  private int viewers;

  @Column(name = "anime_rank")
  private int animeRank;

  @Column(name = "episodes")
  private int episodes;

  @Column(name = "next_ep")
  private int nextEp;

  @Column(name = "studio")
  private String studio;

  @Column(name = "tags", columnDefinition="TEXT")
  private String tags;

  @Column(name = "description", columnDefinition="TEXT")
  private String description;

  @Column(name = "next_ep_date")
  private Date nextEpDate;

  @Column(name = "img", columnDefinition="TEXT")
  private String img;

  @ManyToMany(mappedBy = "animes")
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private Set<User> users;
}

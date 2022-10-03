package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "highScore")
    private int highScore;


    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"users"})
    private List<Score> scores;
}

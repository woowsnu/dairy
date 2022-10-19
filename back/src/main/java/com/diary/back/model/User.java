package com.diary.back.model;


import lombok.*;

import javax.persistence.*;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(nullable = false, length = 30, unique = true)
    private String username;
    @Column(nullable = false, length = 50)
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, length = 30, unique = true)
    private String nickname;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Post> postList;

//    private String roles;
//    private String user_profile; 미구현

}

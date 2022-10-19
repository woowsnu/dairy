package com.diary.back.model;


import com.diary.back.DTO.UserDTO;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

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

    @Builder
    public User(String username, String email, String password, String nickname, List<Post> postList){
        this.username = username;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.postList = postList;
        // role 이 들어오면 role 도 추가(들어오는 property 에도 String role 추가해야함)
        // this.role = role
    }

    public static User createUser(UserDTO userDTO, PasswordEncoder passwordEncoder){
        User user = User.builder()
                .username(userDTO.getUsername())
                .email(userDTO.getEmail())
                .password(userDTO.getPassword())
                .nickname(userDTO.getNickname())
//                .role(userDTO.getRole())
                .build();
        return user;
    }
}

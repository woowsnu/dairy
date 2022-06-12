package com.diary.back.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String user_name;
    private String user_password;
    private String user_email;
    private String user_nickname;
    private String user_profile;

}

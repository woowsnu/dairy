package com.diary.back.DTO;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@NoArgsConstructor
@Getter
public class UserDTO {

    @NotBlank(message = "username은 필수입니다.")
    private String username;

    @NotEmpty(message = "email은 필수입니다.")
    @Email(message = "이메일 형식으로 입력해주세요")
    private String email;

    @NotEmpty(message = "password는 필수입니다.")
    private String password;

    @NotEmpty(message = "nickname은 필수입니다.")
    private String nickname;

    @Builder
    public UserDTO(String username, String email, String password, String nickname){
        this.username = username;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }

}

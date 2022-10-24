package com.diary.back.DTO;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Builder
@Getter
@Setter
@AllArgsConstructor
public class UserDTO {

    @NotNull(message = "userId는 필수입니다.")
    private Long id;

    @NotBlank(message = "username은 필수입니다.")
    private String username;

    @NotBlank(message = "email은 필수입니다.")
    @Email(message = "이메일 형식으로 입력해주세요")
    private String email;

    @NotBlank(message = "password는 필수입니다.")
    private String password;

    @NotBlank(message = "nickname은 필수입니다.")
    private String nickname;

}

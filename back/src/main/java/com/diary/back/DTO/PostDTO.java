package com.diary.back.DTO;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDTO {

    @NotNull(message = "postId는 필수입니다.")
    private Long id;
    // 제목과 내용이 비어도 감정만 들어가면 쓸 수 있어야하지 않을까?
    @NotEmpty(message = "postTitle은 필수입니다.")
    private String title;
    @NotEmpty(message = "postContents 는 필수입니다.")
    private String contents;

    @NotNull(message = "userId는 필수입니다.")
    private Long userId;

    @NotNull(message = "emotionId는 필수입니다.")
    private Long emotionId;

    private String createDate;

    private Timestamp lastUpdate;

}

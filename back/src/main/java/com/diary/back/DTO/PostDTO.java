package com.diary.back.DTO;

import com.diary.back.model.Emotion;
import com.diary.back.model.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
public class PostDTO {

    // 제목과 내용이 비어도 감정만 들어가면 쓸 수 있어야하지 않을까?
    private String title;
    private String contents;

    private User user;

    private Emotion emotion;

    private LocalDateTime createDate;

    private Timestamp lastUpdate;

    @Builder
    public PostDTO(String title, String contents, User user, Emotion emotion, LocalDateTime createDate, Timestamp lastUpdate){
        this.title = title;
        this.contents = contents;
        this.user = user;
        this.emotion = emotion;
        this.createDate = createDate;
        this.lastUpdate = lastUpdate;
    }
}

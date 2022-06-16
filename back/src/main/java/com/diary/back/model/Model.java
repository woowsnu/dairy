package com.diary.back.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.Entity;
import java.beans.ConstructorProperties;

@Builder
//@RequiredArgsConstructor
@AllArgsConstructor
@Setter @Getter
//@Entity
@ToString
@JsonAutoDetect
//@ConstructorProperties()
@NoArgsConstructor
@Data
public class Model {
    @JsonProperty("username")
    private String username;
    @JsonProperty("userpassword")
    private String userpassword;
}

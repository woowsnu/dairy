package com.diary.back.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(info = @Info(title = "일기 API 명세서", description = "감정기반 일기 서비스 '단감' 의 API 명세서입니다.", version = "v1"))
@RequiredArgsConstructor
@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi diaryApi(){
        String[] paths = {"/v1/**"};

        return GroupedOpenApi.builder()
                .group("diary API v1")
                .pathsToMatch(paths)
                .build();
    }
}

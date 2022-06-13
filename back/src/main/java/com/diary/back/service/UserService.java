package com.diary.back.service;

import com.diary.back.model.User;

import java.util.List;

public interface UserService {

    // 유저 등록
    User regist(User user);

    // 유저 수정
    List<User> update(User user);
}

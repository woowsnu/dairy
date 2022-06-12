package com.diary.back.service;

import com.diary.back.model.User;
import com.diary.back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;



    @Override
    public List<User> update(User user){

        final Optional<User> foundUser = repository.findById(user.getUser_id());

        foundUser.ifPresent(newUser -> {
            newUser.setUser_name(user.getUser_name());
            newUser.setUser_email(user.getUser_email());
            newUser.setUser_nickname(user.getUser_nickname());
            newUser.setUser_password(user.getUser_password());
            newUser.setUser_profile(user.getUser_profile());

            repository.save(newUser);

        });

        return repository.findAll();

    }

}

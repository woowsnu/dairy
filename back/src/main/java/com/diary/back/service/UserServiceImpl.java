package com.diary.back.service;

import com.diary.back.DTO.UserDTO;
import com.diary.back.model.User;
import com.diary.back.repository.UserRepository;
import io.sentry.spring.tracing.SentrySpan;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @SentrySpan
    public User registUser(User user){
        validateCuplicateUser(user);
        User encodedUser = encodePassword(user);
        return userRepository.save(encodedUser);
    }

    @SentrySpan
    private void validateCuplicateUser(User user){
        User findUser = userRepository.findByEmail(user.getEmail());
        if (findUser != null){
            throw new IllegalStateException("이미 가입된 email입니다.");
        }
    }

    private User encodePassword(User user){
        User encodedUser = User.builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .password(passwordEncoder.encode(user.getPassword()))
                .nickname(user.getNickname())
                .build();
        return encodedUser;
    }

    @SentrySpan
    public User signInByEmail(UserDTO userDTO){
        final String email = userDTO.getEmail();
        final String password = userDTO.getPassword();
        User userByEmail = userRepository.findByEmail(email);
        if (userByEmail == null){
            throw new IllegalStateException("이메일이 업습니다.");
        } else if (passwordEncoder.matches(password, userByEmail.getPassword())) {
            return userByEmail;
        }
        throw new IllegalStateException("비밀번호가 틀렸습니다.");
    }

//    @Override
//    public List<User> findbyid(User user){
//
//        final Optional<User> foundbyidUser = repository.findById(user.getUser_id());
//
//        foundbyidUser.ifPresent(newUser -> {
//            newUser.setUser_id(user.getUser_id());
//            newUser.setUsername(user.getUsername());
//            newUser.setNickname(user.getNickname());
////            newUser.setUser_profile(user.getUser_profile());
//            repository.save(newUser);
//        });
//
//        return repository.findAll();
//    }
//
//    // 유저 등록
////    @Override
////    public User regist(User user){ return repository.save(user); }
//
//    // 유저 수정
//    @Override
//    public List<User> update(User user){
//
//        final Optional<User> foundUser = repository.findById(user.getUser_id());
//
//        foundUser.ifPresent(newUser -> {
//            newUser.setUsername(user.getUsername());
//            newUser.setEmail(user.getEmail());
//            newUser.setNickname(user.getNickname());
//            newUser.setPassword(user.getPassword());
////            newUser.setUser_profile(user.getUser_profile());
//
//            repository.save(newUser);
//
//        });
//
//        return repository.findAll();
//
//    }
}


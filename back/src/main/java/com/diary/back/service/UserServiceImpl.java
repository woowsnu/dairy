package com.diary.back.service;

import com.diary.back.DTO.UserDTO;
import com.diary.back.model.User;
import com.diary.back.repository.UserRepository;
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

    public User registUser(User user){
        validateCuplicateUser(user);
        User encodedUser = encodePassword(user);
        return userRepository.save(encodedUser);
    }

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

    // 유저가 로그인하면 DB 안의 user 들과 하나씩 비교해서 true false 반환하기
    // 실패
//    @Override
//    public void login(User user){
//        System.out.println("login serviceImpl");
//
//        if(repository.equals(user.getUser_name())){
//            System.out.println(true);
//        }else { System.out.println(false); }
//    }

//    String jsonStr = jsonArray.toJSONString();
    //임시저장
//    @Override
//    public Boolean isThereUseridAndPassword(Model model){
//
//
////        Model loginUser = repository.findByUser_name(model.getAttribute("user_name"));//ver1
////        String loginUser = (String) model.getUsername();//ver2
//        String loginUser = model.getUsername(); //ver3
////        String loginUser = (String) model.asMap().get("user_name"); //ver1
//        User userSelect = repository.findByUsername(loginUser);
//        System.out.println(userSelect);
////        String userCheckk = userCheck.getUsername(model);
//        String userCheck = userSelect.getUsername(); //살려야함
////        System.out.println(userCheck); // DB안에 있는 id
//                                        //DB밖 id
//////        String userCheck = repository.findByUsername(model.getUsername());//ver2
////
////        String loginUserPass = (String) model.getUserpassword();
//////        String loginUserPass = (String) model.asMap().get("user_password"); //ver1
////        String userCheckPass = repository.findByUserpassword(loginUserPass);
//
//
//
//        //여기서부터 다 살리기
//        //lastPass
//        String loginUserPass = model.getPassword();
//        User userSelectPass = repository.findByUserpassword(loginUserPass);
//        String userCheckPass = userSelectPass.getPassword();
//
////        //ver2
//        if(userSelect == null){
//            return false;
//        }
////        if(!loginuser.getUser_password().equals(user.getUser_password())){
////        if(!userCheckPass.getAttribute("user_password").equals(model.getAttribute("user_password"))){
//        if(!userSelectPass.getPassword().equals(loginUserPass)){
////        if(userCheckPass == null){
//            return false;
//        }
//
//        return true;
////        return userCheck;
////        return "";
////        return "";
//    }
}


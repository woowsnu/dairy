package com.diary.back;

import com.diary.back.DTO.UserDTO;
import com.diary.back.model.User;
import com.diary.back.service.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@Transactional
class BackApplicationTests {
	@Autowired
	UserService userService;

	@Autowired
	PasswordEncoder passwordEncoder;

	public User createUser(){
		UserDTO userDTO = UserDTO.builder()
				.username("usernameTest")
				.email("emailTest")
				.password("passwordTest")
				.nickname("nickTest")
				.build();
		return User.createUser(userDTO, passwordEncoder);
	}

	@Test
	@DisplayName("회원가입 테스트")
	public void saveUserTest(){
		User user = createUser();
		User saveUser = userService.saveUser(user);

		assertEquals(user.getEmail(), saveUser.getEmail());
	}

	@Test
	void contextLoads() {
	}

}

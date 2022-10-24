package com.diary.back;

import com.diary.back.DTO.PostDTO;
import com.diary.back.DTO.UserDTO;
import com.diary.back.model.Emotion;
import com.diary.back.model.Post;
import com.diary.back.model.User;
import com.diary.back.service.PostService;
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
		User saveUser = userService.registUser(user);

		assertEquals(user.getEmail(), saveUser.getEmail());
	}

	@Autowired
	PostService postService;

	Emotion emotion = new Emotion(0L,1L,"감정test1",2,3,4);

//	public Post createPost(){
//		User user = createUser();
//		PostDTO postDTO = PostDTO.builder()
//				.title("postTitleTEST")
//				.contents("postContentsTEST")
//				.userId(user.getId())
//				.emotionId(emotion.getEmotionId())
//				.build();
//		return Post.createPost(postDTO);
//	}
//
//	@Test
//	@DisplayName("게시글 작성 테스트")
//	public void savePostTest(){
//		Post post = createPost();
//		Post savePost = postService.registPost(post);
//	}

	@Test
	void contextLoads() {
	}

}

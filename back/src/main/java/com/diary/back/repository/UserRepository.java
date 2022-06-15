package com.diary.back.repository;

import com.diary.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

//
// List<String> findUsername(Optional request);
 User findByUser_name(String user_name);

}

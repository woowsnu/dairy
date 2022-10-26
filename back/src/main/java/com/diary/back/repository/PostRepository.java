package com.diary.back.repository;

import com.diary.back.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    public List<Post> findByUserId(Long userId);

    @Query(value = "SELECT * FROM post WHERE TITLE LIKE %:search% OR CONTENTS LIKE %:search%", nativeQuery = true)
    public List<Post> findBySearch(@Param("search") String search);

}


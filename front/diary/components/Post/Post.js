import React, { useState } from "react";
import { useRouter } from "next/router";
import { postTodoAPI } from "../../lib/api/post";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import styled from "styled-components";
import Button from "../UI/Button";

const Post = () => {
  //todo 입력 폼에 들어갈 항목들을 state로 관리
  const [description, setDescription] = useState("");
  const [emotion, setEmotion] = useState("와우")
  
  // useRouter
  const router = useRouter();

  const descChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  // addTodo 함수 작성
  const addTodo = () => {
    const post = {
      emotion: emotion,
      post_text: description,
    };
    console.log(post);
    //POST API 요청 전송, data와 함께
    postTodoAPI(post);
    // 폼에 입력된 상태값 초기화
    // setTitle('');
    // setDescription('');
    // setDueDate('');
    router.replace("/");
  };

  return (
    <Container>
      <form>
        <h3 className="write-title">2022.06.14</h3>
        <input type="text" value={emotion} />
        <textarea className="write-area" value={description} onChange={descChangeHandler}>
        </textarea>
        <Button onClick={addTodo}>저장</Button>
      </form>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;

  .write-title {
    ${fonts.H2};
    color: ${colors.gray1};
    text-align: left;
    padding: 20px 0;
  }

  .write-area {
    width: 90%;
    border: 1px solid ${colors.gray4};
    border-radius: 5px;
    padding: 12px;
    margin-top: 20px;
    ${fonts.Body2};
    color: ${colors.gray3};
  }
`;

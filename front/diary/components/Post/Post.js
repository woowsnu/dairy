import React, { useState } from "react";
import { useRouter } from "next/router";
import { postTodoAPI } from "../../lib/api/post";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import styled from "styled-components";
import Button from "../UI/Button";

const Post = () => {
  //post 입력 항목 state
  const [description, setDescription] = useState("");

  // 쿼리스트링으로 받은 감정 단어
  const router = useRouter();
  const emotion = router.query.selected;

  // new Date의 날짜 포맷 지정
  const today = new Date();
  
  function getToday(){
    var year = today.getFullYear();
    var month = ("0" + (1 + today.getMonth())).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }

  function getTodayView(){
    var year = today.getFullYear();
    var month = ("0" + (1 + today.getMonth())).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    return year + "." + month + "." + day;
  }

  const date = getToday(today);
  const dateView = getTodayView(today);
//  function leftPad(value) {
//     if (value >= 10) {
//         return value;
//     }

//     return `0${value}`;
//     }

//   function toStringByFormatting(source, delimiter = '-') {
//     const year = source.getFullYear();
//     const month = leftPad(source.getMonth() + 1);
//     const day = leftPad(source.getDate());
    
//     return [year, month, day].join(delimiter);
// }
  const descChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  // addTodo 함수 작성
  const addPost = () => {
    const post = {
      emotion_list: emotion,
      post_text: description,
      post_date : date
    };

    postTodoAPI(post);

    router.replace("/");
  };

  return (
    <Container>
      <form>
        <h3 className="write-title">{dateView}</h3>
        <span className="tag" value={emotion}>{emotion}</span>
        {/* <input type="text" placeholder={router.query.selected} value={router.query.selected}>{router.query.emotion}</input> */}
        <textarea className="write-area" value={description} onChange={descChangeHandler} cols="30" rows="10">
        </textarea>
        <Button onClick={addPost}>저장</Button>
      </form>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 90%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  .write-title {
    ${fonts.H2};
    color: ${colors.gray2};
    text-align: left;
    padding: 30px 0 20px 0;
  }

  .tag {
    font-size: 14px;
    padding: 6px 14px;
    margin: 10px 0;
    border-radius: 16px;
    color: ${colors.white};
    background-color: ${colors.primary};
  }

  .write-area {
    width: 90%;
    border: 1px solid ${colors.gray4};
    border-radius: 5px;
    padding: 12px;
    margin-top: 30px;
    ${fonts.Body2};
    color: ${colors.gray3};
  }
`;

import React from "react";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import styled from "styled-components";
import Button from "../UI/Button";

const Post = () => {
  return (
    <Container>
      <form>
      <h3 className="write-title">2022.06.14</h3>
      <input type="text" value={"선택된 단어들이 들어와야하는데"}/>
      <textarea className="write-area">오늘의 감정을 글로 남겨보세요.</textarea>
      <Button type="submit">저장</Button>
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
    color: ${colors.gray3}
  }
`
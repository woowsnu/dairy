import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import Button from "../../UI/Button";

const Emotion = (props) => {
  console.log(props);
  // 단어 선택 여부
  const [isChecked, setIsChecked] = useState([]);
  const [sliderValue, setSliderValue] = useState();

  console.log(props);
  const checkHandler = (e) => {
    console.log(e.target.textContent);
    setIsChecked()
  };

  console.log(isChecked);
  
  const sliderValueHandelr = (e) => {
    console.log(e.target.value);
  }
  // Post_emotion 업데이트
  // const updateTodo = () => {
  //     props.updateTodo(props.id); // Todos 컴포넌트에서 props를 통해 내려받은
  //     // 핸들러 함수 호출, 인자값으로 id값 전달 -> lifting state up
  //   };

  // 선택완료 시 emotion으로 돌아가고 선택된 값 업데이트!


  return (
    <Container>
      <div className="title">
        오늘의 기쁨은
        <br />
        어느정도 였나요?</div>
      <div className="word-area">단어들이 나오는 부분
      <p onClick={checkHandler}>기쁘다</p>
      <p onClick={checkHandler}>신난다</p>
      </div>
      <Wrapper>
        <div className="slider-label">
        <p>약간</p>
        <p>많이</p>
        </div>
        <input className="slider" type="range" min="1" max="100" onChange={sliderValueHandelr}/>
      </Wrapper>
      <Link href="/emotions"><Button>선택완료</Button></Link>
    </Container>
  );
};

export default Emotion;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;

  .title {
    text-align: left;
    ${fonts.H1};
    color: ${colors.gray1};
    padding-top: 20px;
  }

  .word-area {
    margin-top: 30px;
    padding: 60px 0;
    border: 1px solid ${colors.gray4}
  }
`;

const Wrapper = styled.div`
 
  ${fonts.Caption};
  color: ${colors.gray4};

  .slider-label {
    display: flex;
    justify-content: space-between;
  }

  .slider {
    width: 100%;
    background-color: ${colors.primary};
  }
`
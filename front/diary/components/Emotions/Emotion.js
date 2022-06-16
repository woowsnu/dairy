import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Button from "../UI/Button";

const Emotion = (props) => {

  // 선택된 단어 추가
  const onselectHandler = (e) => {
    const emotionWord = e.target.textContent
    props.selectHandler(emotionWord);
  };

  // 슬라이더 onchange 이벤트 값
  const sliderValueHandelr = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <div>닫기</div>
      <div className="title">
        감정의 강도는
        <br />
        어느정도 였나요?
      </div>
      <WordSection>
        {props.emotion.map((emo)=>{
          return <button onClick={onselectHandler}>{emo.emotion_word}</button>
        })}
        <button onClick={onselectHandler}>
          {props.emotion[0].emotion_word}
        </button>
      </WordSection>
      <Wrapper>
        <div className="slider-label">
          <p>약간</p>
          <p>많이</p>
        </div>
        <input className="slider" type="range" min="1" max="100"
          onChange={sliderValueHandelr}
        />
      </Wrapper>
      <Button>선택완료</Button>
    </Container>
  );
};

export default Emotion;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  z-index: 100;

  .title {
    text-align: left;
    ${fonts.H1};
    color: ${colors.gray1};
    padding-top: 20px;
  }
`;

const WordSection = styled.div`
  margin-top: 30px;
  padding: 60px 0;
  border: 1px solid ${colors.gray4};
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
    background: ${colors.primary};
  }
`;

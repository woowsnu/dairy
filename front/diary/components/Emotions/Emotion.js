import React, {useState} from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Button from "../UI/Button";

const Emotion = (props) => {
  // 창닫기 state
  const [close, setClose] = useState('hidden');
  // 선택된 단어 추가
  const { onClose } = props;

  const onselectHandler = (e) => {
    const emotionWord = e.target.textContent
    props.selectHandler(emotionWord);
  };

  // 슬라이더 onchange 이벤트 값
  const sliderValueHandelr = (e) => {
    console.log(e.target.value);
  };

  // Emotion 닫기
  const [ emotionClose, setEmotionClose ] = useState(false);
  const closeEmotion = () => {
    setEmotionClose(!emotionClose);
  } 

  return (
    <Container hidden={emotionClose}>
      <div className="title">
        감정의 강도는
        <br />
        어느정도 였나요?
      </div>
      <WordSection>
        {props.emotion.map((emo)=>{
          return <div className="tag" onClick={onselectHandler}>{emo.emotion_word}</div>
        })}
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
      <Button onClick={closeEmotion}>선택완료</Button>
    </Container>
  );
};

export default Emotion;

const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 94%;
  margin: 0 auto;
  padding: 20px;
  z-index: 100;
  background-color: white;

  .title {
    text-align: left;
    ${fonts.H1};
    color: ${colors.gray2};
    padding-top: 20px;
  }
`;

const WordSection = styled.div`
  margin-top: 10px;
  padding: 30px 10px;
  border: 1px solid ${colors.gray4};
  display: flex;
  flex-wrap: wrap;

  .tag {
    padding: 8px 14px;
    margin:4px;
    font-size: 15px;
    background-color: ${colors.gray5};
    border-radius: 16px;
  }

  .tag:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;

const Wrapper = styled.div`
  ${fonts.Caption};
  color: ${colors.gray4};

  .slider-label {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }

  .slider {
    -webkit-appearance: none;
    accent-color: ${colors.primary};
    background-color: ${colors.gray4};
    border-radius: 3px;
    width: 100%;
    height: 6px;
  }
`;

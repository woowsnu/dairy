import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Button from "../UI/Button";
import EmotionTab from "./EmotionTab";

// EC: EmotionCategory
const EC = [
  {
    id: 1,
    name: "슬픔",
    color: "#122792",
  },
  {
    id: 2,
    name: "기쁨",
    color: "#FF993A",
  },
  {
    id: 3,
    name: "놀람",
    color: "#46E5D2",
  },
  {
    id: 4,
    name: "공포",
    color: "#7048E7",
  },
  {
    id: 5,
    name: "분노",
    color: "#FF4E49",
  },
  {
    id: 6,
    name: "혐오",
    color: "#3DB97F",
  },
  {
    id: 7,
    name: "지루함",
    color: "#4BAAEE",
  },
  {
    id: 8,
    name: "흥미",
    color: "#FF8DA9",
  },
];

const Emotions = () => {
  // const [emotion, setEmotion] = useState([]);

  // function fetchEmotionHandler() {
  //   fetch('https://3132ec38-0704-4b48-8420-2fbe61cb0fb5.mock.pstmn.io/?cat_id=1')
  //   .then(response => {return response.json();})
  //   .then(data => {setEmotion(data.result);
  //   });
  //   console.log(emotion);
  // }

  const [selected, setSelected] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const selectHandler = (event) => {
    setSelected(event.target.value);
  };

  // const emotionBtn = (
  //   <div className="btn" onClick={clickHandler} key={props.cats[0].id}>
  //     <div className="btn-main-emotion" color={props.cats[0].color}></div>
  //     <p className="txt-main-emotion">{props.cats[0].name}</p>
  //   </div>
  // );

  return (
    <div>
      <Title>오늘의 기분은 어떠셨나요?</Title>
      <Section>
        {selected.length > 0 ? (
          selected
        ) : (
          <div>선택하신 단어가 표시됩니다.</div>
        )}
      </Section>
      <Wrap>
          <EmotionTab cats={EC} clickHandler={clickHandler}/>
          {/* <Link href={"/emotions/" + EC[1].id}>
            <div className="btn" onClick={clickHandler} key={EC[1].id}>
              <div className="btn-main-emotion" style={{backgroundColor : EC[1].color}}></div>
              <p className="txt-main-emotion">{EC[1].name}</p>
            </div>
          </Link> */}
      </Wrap>
      {selected.length > 0 ? (
        <Link href="/write">
          <Button>일기쓰기</Button>
        </Link>
      ) : (
        <Button style={{backgroundColor: "grey"}}>단어를 선택해주세요</Button>
      )}
    </div>
  );
};

export default Emotions;

const Title = styled.div`
  ${fonts.H1};
  color: ${colors.gray1};
  text-align: center;
  padding: 20px 0;
`;
const Section = styled.div`
  border: 1px dashed ${colors.gray4};
  padding: 110px 45px;
  text-align: center;
  ${fonts.Body1};
  color: ${colors.gray4};
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 335px;
  padding: 0 20px;
  margin-top: 22px;

  .btn-main-emotion {
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    z-index: 1;
  }

  .btn-main-emotion2 {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 5;
  }

  .txt-main-emotion {
    text-align: center;
    padding-top: 10px;
    ${fonts.Body1}
  }
`;
import React, { useState } from "react";
import Link from "next/link";
import Modal from "../UI/Modal";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Button from "../UI/Button";

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const EmotionCat = [
    {
      id: 1,
      name: "기쁨",
      color: "#FF993A",
    },
    {
      id: 2,
      name: "슬픔",
      color: "#46E5D2",
    },
    {
      id: 3,
      name: "놀람",
      color: "#122792",
    },
  ];

  return (
    <div>
      <Title>오늘의 기분은 어떠셨나요?</Title>
      <Section>
        선택하신 단어가 표시됩니다.
      </Section>
      <Wrap>
        <div className="btn">
          <div className="btn-main-emotion" color={EmotionCat[0].color}>
          </div>
          <p className="txt-main-emotion">{EmotionCat[0].name}</p>
        </div>
        <div className="btn">
          <div className="btn-main-emotion" color={EmotionCat[1].color}></div>
          <p className="txt-main-emotion">{EmotionCat[1].name}</p>
        </div>
        <div className="btn">
          <div className="btn-main-emotion" color={EmotionCat[2].color}></div>
          <p className="txt-main-emotion">{EmotionCat[2].name}</p>
        </div>
        <div className="btn">
          <div className="btn-main-emotion" color={EmotionCat[2].color}></div>
          <p className="txt-main-emotion">{EmotionCat[2].name}</p>
        </div>
      </Wrap>
      <Wrap>
        <div className="btn">
          <div className="btn-main-emotion" color={EmotionCat[0].color}>
          </div>
          <p className="txt-main-emotion">{EmotionCat[0].name}</p>
        </div>
        <div className="btn">
          <div className="btn-main-emotion" color={EmotionCat[1].color}></div>
          <p className="txt-main-emotion">{EmotionCat[1].name}</p>
        </div>
        <div className="btn">
          <div className="btn-main-emotion" color={EmotionCat[2].color}></div>
          <p className="txt-main-emotion">{EmotionCat[2].name}</p>
        </div>
        <div className="btn">
          <div className="btn-main-emotion" color={EmotionCat[2].color}></div>
          <p className="txt-main-emotion">{EmotionCat[2].name}</p>
        </div>
      </Wrap>
      <Button tpye="submit">다음</Button>
    </div>
  );
};

export default Card;

const Title = styled.div`
    ${fonts.H1};
    color: ${colors.gray1};
    text-align: center;
    padding: 20px 0;
`
const Section = styled.div`
    border: 1px dashed ${colors.gray4};
    padding: 110px 45px;
    text-align: center;
    ${fonts.Body1};
    color: ${colors.gray4};
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 335px;
  padding: 0 20px;
  margin-top: 22px;

  .btn-main-emotion {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: ${colors.E1};
  }

  .txt-main-emotion {
    text-align: center;
    padding-top: 10px;
    ${fonts.Body1}
  }
`;

// const Btn = styled.button`
//   border: 0;
//   border-radius: 5px;
//   width: 335px;
//   padding: 14px 120px;
//   margin: 0 auto;
//   background-color: ${colors.primary};
//   color: ${colors.white};
//   ${fonts.H3};
// `

// // {EmotionCat.map((cat)=> (
// //     <Link href={{
// //         pathname: "/emotions/[id]",
// //         query: { id: cat.id },
// //     }}>
// //     <a key={cat.id}>
// //     <div>동그라미</div>
// //     <label>{cat.name}</label>
// //     </a>
// //     </Link>
// // ))}

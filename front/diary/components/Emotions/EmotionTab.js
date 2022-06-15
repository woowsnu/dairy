import React from "react";
import Link from "next/link";
import styled from "styled-components";
import fonts from "../../styles/fonts";

// 시간되면 map으로 리팩토링
const EmotionTab = (props) => {
  return (
    <Wrap>
      <Link href={"/emotions/" + props.cats[0].id}>
        <div
          className="btn"
          key={props.cats[0].id}
          onClick={props.clickHandler}
        >
          <div
            className="btn-main-emotion2"
            style={{ backgroundColor: props.cats[0].color, opacity: 1 }}
          >
            <div
              className="btn-main-emotion"
              style={{ backgroundColor: props.cats[0].color, opacity: 0.3 }}
            ></div>
          </div>
          <p className="txt-main-emotion">{props.cats[0].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[1].id}>
        <div
          className="btn"
          key={props.cats[1].id}
          onClick={props.clickHandler}
        >
          <div
            className="btn-main-emotion2"
            style={{ backgroundColor: props.cats[1].color, opacity: 1 }}
          >
            <div
              className="btn-main-emotion"
              style={{ backgroundColor: props.cats[1].color, opacity: 0.3 }}
            ></div>
          </div>
          <p className="txt-main-emotion">{props.cats[1].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[2].id}>
        <div
          className="btn"
          key={props.cats[2].id}
          onClick={props.clickHandler}
        >
          <div
            className="btn-main-emotion2"
            style={{ backgroundColor: props.cats[2].color, opacity: 1 }}
          >
            <div
              className="btn-main-emotion"
              style={{ backgroundColor: props.cats[2].color, opacity: 0.3 }}
            ></div>
          </div>
          <p className="txt-main-emotion">{props.cats[2].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[3].id}>
        <div
          className="btn"
          key={props.cats[3].id}
          onClick={props.clickHandler}
        >
          <div
            className="btn-main-emotion2"
            style={{ backgroundColor: props.cats[3].color, opacity: 1 }}
          >
            <div
              className="btn-main-emotion"
              style={{ backgroundColor: props.cats[3].color, opacity: 0.3 }}
            ></div>
          </div>
          <p className="txt-main-emotion">{props.cats[3].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[4].id}>
        <div
          className="btn"
          key={props.cats[4].id}
          onClick={props.clickHandler}
        >
          <div
            className="btn-main-emotion2"
            style={{ backgroundColor: props.cats[4].color, opacity: 1 }}
          >
            <div
              className="btn-main-emotion"
              style={{ backgroundColor: props.cats[4].color, opacity: 0.3 }}
            ></div>
          </div>
          <p className="txt-main-emotion">{props.cats[4].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[5].id}>
        <div
          className="btn"
          key={props.cats[5].id}
          onClick={props.clickHandler}
        >
          <div
            className="btn-main-emotion2"
            style={{ backgroundColor: props.cats[5].color, opacity: 1 }}
          >
            <div
              className="btn-main-emotion"
              style={{ backgroundColor: props.cats[5].color, opacity: 0.3 }}
            ></div>
          </div>
          <p className="txt-main-emotion">{props.cats[5].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[6].id}>
        <div
          className="btn"
          key={props.cats[6].id}
          onClick={props.clickHandler}
        >
          <div
            className="btn-main-emotion2"
            style={{ backgroundColor: props.cats[6].color, opacity: 1 }}
          >
            <div
              className="btn-main-emotion"
              style={{ backgroundColor: props.cats[6].color, opacity: 0.3 }}
            ></div>
          </div>
          <p className="txt-main-emotion">{props.cats[6].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[7].id}>
        <div
          className="btn"
          key={props.cats[7].id}
          onClick={props.clickHandler}
        >
          <div
            className="btn-main-emotion2"
            style={{ backgroundColor: props.cats[7].color, opacity: 1 }}
          >
            <div
              className="btn-main-emotion"
              style={{ backgroundColor: props.cats[7].color, opacity: 0.3 }}
            ></div>
          </div>
          <p className="txt-main-emotion">{props.cats[7].name}</p>
        </div>
      </Link>
    </Wrap>
  );
};

export default EmotionTab;

const Wrap = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;

  .btn {
    width: 25%;
    display: flex;
    justify-content: center;
  }

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
    margin-top: 10px;
    ${fonts.Body1}
  }
`;

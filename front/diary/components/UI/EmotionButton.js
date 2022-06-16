import React from "react";
import fonts from "../../styles/fonts";

const EmotionButton = React.forwardRef((props, ref) => {
  return (
    <Wrap>
      <div className="btn" key={props.id} onClick={onClickHandler}>
        <div className="btn-main-emotion2" style={{ backgroundColor: props.color, opacity: 1 }}>
          <div className="btn-main-emotion" style={{ backgroundColor: props.color, opacity: 0.3 }}></div>
        </div>
        <p className="txt-main-emotion" ref={ref}>
          {props.name}
        </p>
      </div>
    </Wrap>
  );
});

export default EmotionButton;

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

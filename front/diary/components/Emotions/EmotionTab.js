import React from "react";
import Link from "next/link";

const EmotionTab = (props) => {
  const cats = props.cats;

  cats.map((cat) => {
    console.log(cat.id);
  });

  return (
    <>
      <Link href={"/emotions/" + props.cats[0].id}>
        <div className="btn" key={props.cats[0].id} onClick={props.clickHandler}>
          <div className="btn-main-emotion2" style={{ backgroundColor: props.cats[0].color, opacity: 1 }}>
            <div className="btn-main-emotion" style={{ backgroundColor: props.cats[0].color, opacity: 0.3}}></div>
          </div>
          <p className="txt-main-emotion">{props.cats[0].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[1].id}>
        <div className="btn" key={props.cats[1].id} onClick={props.clickHandler}>
          <div className="btn-main-emotion2" style={{ backgroundColor: props.cats[1].color, opacity: 1 }}>
            <div className="btn-main-emotion" style={{ backgroundColor: props.cats[1].color, opacity: 0.3}}></div>
          </div>
          <p className="txt-main-emotion">{props.cats[1].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[2].id}>
        <div className="btn" key={props.cats[2].id} onClick={props.clickHandler}>
          <div className="btn-main-emotion2" style={{ backgroundColor: props.cats[2].color, opacity: 1 }}>
            <div className="btn-main-emotion" style={{ backgroundColor: props.cats[2].color, opacity: 0.3}}></div>
          </div>
          <p className="txt-main-emotion">{props.cats[2].name}</p>
        </div>
      </Link>
      <Link href={"/emotions/" + props.cats[3].id}>
        <div className="btn" key={props.cats[3].id} onClick={props.clickHandler}>
          <div className="btn-main-emotion2" style={{ backgroundColor: props.cats[3].color, opacity: 1 }}>
            <div className="btn-main-emotion" style={{ backgroundColor: props.cats[3].color, opacity: 0.3}}></div>
          </div>
          <p className="txt-main-emotion">{props.cats[3].name}</p>
        </div>
      </Link>
      
    </>
  );
};

export default EmotionTab;

import React, { useState } from "react";
import Calendar from "react-calendar";

const Main = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div>
      <Calendar onClickDay={onChange} value={value} />
      {/* <div>{moment(value).format("YYYY년 MM월 DD일")}</div> */}
    </div>
  );
};

export default Main;

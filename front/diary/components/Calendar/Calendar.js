import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const UserCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = () => {
    setDate(date);
  };
  return (
    <Container>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
    </Container>
  );
};

export default UserCalendar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

{
  /* <div>{moment(value).format("YYYY년 MM월 DD일")}</div> */
}

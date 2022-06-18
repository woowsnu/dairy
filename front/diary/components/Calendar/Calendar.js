import React, { useState } from "react";
import Link from "next/link";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Button from "../UI/Button";

const UserCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = () => {
    setDate(date);
  };

  return (
    <Container>
      <Calendar onChange={onChange} value={date} />
      <Link href="/emotions">
        <Button>일기쓰기</Button>
      </Link>
    </Container>
  );
};

export default UserCalendar;

const Container = styled.div`
  display: flex;
  width: 90%;
  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

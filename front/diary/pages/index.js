import { Reset } from "styled-reset";
import Link from "next/link";
import Button from "../components/UI/Button";
import Calendar from "../components/Calendar/Calendar";

export default function Home() {
  return (
    <>
      <Reset />
      <Calendar />
      <Link href="/emotions"><Button>일기쓰기</Button></Link>
    </>
  );
}

// Post 데이터 불러와서 해당하는 날짜에 표시해주기
const USER_POST = [
  {
    post_id: 1,
    user_id: 1,
    post_date: "2022-06-10",
    post_text: "오늘은 어쩌구저쩌구",
  },
  {
    post_id: 2,
    user_id: 1,
    post_date: "2022-06-11",
    post_text: "오늘은 어쩌구저쩌구",
  },
];
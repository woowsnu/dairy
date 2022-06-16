<<<<<<< HEAD
import React, { useState } from 'react'
import ChartWeekly from '../../components/Charts/ChartWeekly'
import Mypage from '../../components/Mypage/Mypage'

const weekly = (props) => {
  console.log(props.post);
  const [post, setPost] = useState(props.post);

  

  return (
    <div className="weekly">
      <Mypage></Mypage>
      <ChartWeekly post={post}/>
=======
import React from 'react'
import ChartWeekly from '../../components/Charts/ChartWeekly'
import Mypage from '../../components/Mypage/Mypage'

const weekly = () => {
  return (
    <div className="weekly">
      <Mypage></Mypage>
      <ChartWeekly/>
>>>>>>> 4bf7118f0e5f08d509f08b85ef5965d98f46a5d0
    </div>
  )
  
}

export const getStaticProps = async() => {
  try {
    const res = await fetch("http://localhost:8080/post");
    const post = await res.json();

    return {
      props: {post},
    };
  } catch (error){
    console.log(error);
    return {props:{}};
  }
}

<<<<<<< HEAD

=======
>>>>>>> 4bf7118f0e5f08d509f08b85ef5965d98f46a5d0
export default weekly
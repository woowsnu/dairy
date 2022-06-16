import React, { useState } from "react";
import Emotions from "../../components/Emotions/Emotions";

const MainEmotions = (props) => {

  const [emotion, setEmotion] = useState(props.emotion);
  
  return <Emotions emotion={emotion}/>;
};

export default MainEmotions;

// Get All emotion Data 
export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:8080/emotions");
    const emotion = await res.json();
    
    return {
        props: { emotion },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
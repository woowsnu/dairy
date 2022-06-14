import React from "react";
import { useRouter } from "next/router";
import Emotion from "../../components/Emotions/Emotion/Emotion";

const EmotionDetail = () => {
  const router = useRouter();

  console.log(router.query.id);

  // send a request to backend API
  // to fetch the emotion word with emotion id
  
  return (<div>
    <Emotion/>
  </div>);
};

export default EmotionDetail;

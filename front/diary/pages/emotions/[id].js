import React from "react";
import { useRouter } from "next/router";

const EmotionDetail = () => {
  const router = useRouter();

  console.log(router.query.id);

  // send a request to backend API
  // to fetch the emotion word with emotion id
  
  return <div>EmotionDetail</div>;
};

export default EmotionDetail;

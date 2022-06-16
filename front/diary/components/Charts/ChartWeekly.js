import React, { useState } from 'react'
import { getDiaryAPI } from '../../lib/api/mypage';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const ChartWeekly = (props) => {

   
    console.log(Array.isArray(props.post));

    let postArray = [];
    const posts = props.post.map((p)=>{
        postArray.push(p.emotion_cat_id);
    })
    console.log("postArray");
    console.log(postArray);
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;
    let count8 = 0;
    for(let i = 0; i < postArray.length ; i++ ){
        if(postArray[i] == 1){
            count1++;
        } else if(postArray[i] == 2){
            count2++;
        } else if(postArray[i] == 3){
            count3++;
        } else if(postArray[i] == 4){
            count4++;
        } else if(postArray[i] == 5){
            count5++;
        } else if(postArray[i] == 6){
            count6++;
        } else if(postArray[i] == 7){
            count7++;
        } else if(postArray[i] == 8){
            count8++;
        }
    }
    console.log("count8");
    console.log(count8);

    return (
        <>
            {/* <div>{props.post[0].post_id}</div> */}
            <App />
        </>
    )

}

export default ChartWeekly

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['슬픔', '기쁨', '놀람', '공포', '분노', '혐오','지루함', '흥미'],
  datasets: [
    {
      label: '# of Votes',
      data: [4, 12, 19, 3, 5, 2, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(100, 100, 100, 0.2)',
        'rgba(1, 150, 100, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(100, 100, 100, 1)',
        'rgba(1, 150, 100, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function App() {
    return <Doughnut data={data} />;
  }
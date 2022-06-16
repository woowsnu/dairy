<<<<<<< HEAD
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
=======
import React, { PureComponent } from 'react'
import {
    PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart
  } from 'recharts';

const data =[
    {emotion: "슬픔",
        0:5, 1:3, 2:5, 3:9,4:0,5:1,6:1, fullMark:150,},
    {emotion: "기쁨",
        0:5, 1:4, 2:5, 3:9,4:0,5:1,6:1, fullMark:150,},
    {emotion: "놀람",
        0:3, 1:2, 2:5, 3:9,4:0,5:1,6:1, fullMark:150,},
    {emotion: "공포",
        0:5, 1:5, 2:5, 3:9,4:0,5:1,6:1, fullMark:150,},
    {emotion: "분노",
        0:6, 1:4, 2:5, 3:9,4:0,5:1,6:1, fullMark:150,},
    {emotion: "혐오",
        0:5, 1:6, 2:5, 3:9,4:0,5:1,6:1, fullMark:150,},
    {emotion: "지루함",
        0:5, 1:3, 2:5, 3:9,4:0,5:1,6:1, fullMark:150,},
    {emotion: "흥미",
        0:7, 1:5, 2:5, 3:9,4:0,5:1,6:1, fullMark:150,
    },
];

export default class ChartWeekly extends PureComponent{
    render(){
        return(
            <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="emotion"/>
                <PolarRadiusAxis />
                <Radar name="Today" dataKey="0" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                <Radar name="Day -1" dataKey="1" stroke="#FF993A" fill="#FF993A" fillOpacity={0.6}/>

                {/* 그래서 7일간의 합을  */}
            </RadarChart>
        );
    }
}
>>>>>>> 4bf7118f0e5f08d509f08b85ef5965d98f46a5d0

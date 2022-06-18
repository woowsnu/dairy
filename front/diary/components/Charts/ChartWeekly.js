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
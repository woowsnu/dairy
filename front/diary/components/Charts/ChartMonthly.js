import React, { PureComponent } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const data =[
    {name: 'Day -6',
        슬픔: 0,
        기쁨: 7,
        놀람: 1,
        공포:0,
        분노: 0,
        혐오:0,
        지루함: 0,
        흥미: 3,
        amt: 2400,
    },
    {name: 'Day -5',
        슬픔: 1,
        기쁨: 5,
        놀람: 0,
        공포:1,
        분노: 0,
        혐오:1,
        지루함: 5,
        흥미: 3,
        amt: 0,
    },
    {name: 'Day -4',
        슬픔: 1,
        기쁨: 1,
        놀람: 2,
        공포:0,
        분노: 1,
        혐오:3,
        지루함: 2,
        흥미: 5,
        amt: 0,
    },
    {name: 'Day -3',
        슬픔: 1,
        기쁨: 5,
        놀람: 2,
        공포:6,
        분노: 5,
        혐오:3,
        지루함: 5,
        흥미: 1,
        amt: 0,
    },
    {name: 'Day -2',
        슬픔: 0,
        기쁨: 0,
        놀람: 0,
        공포:1,
        분노: 5,
        혐오:2,
        지루함: 0,
        흥미: 3,
        amt: 0,
    },
    {name: 'Day -1',
        슬픔: 0,
        기쁨: 4,
        놀람: 0,
        공포:0,
        분노: 8,
        혐오:1,
        지루함: 2,
        흥미: 1,
        amt: 0,
    },
    {name: 'Today',
        슬픔: 0,
        기쁨: 1,
        놀람: 4,
        공포:1,
        분노: 5,
        혐오:1,
        지루함: 3,
        흥미: 1,
        amt: 0,
    },
];

export default class ChartMonthly extends PureComponent{
    render(){
        return(
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey ="슬픔" stroke="#122792" activeDot={{r:8}}/>
                <Line type="monotone" dataKey ="기쁨" stroke="#FF993A" />
                <Line type="monotone" dataKey ="놀람" stroke="#46E5D2" />
                <Line type="monotone" dataKey ="공포" stroke="#7048E7" />
                <Line type="monotone" dataKey ="분노" stroke="#FF4E49" />
                <Line type="monotone" dataKey ="혐오" stroke="#3DB97F" />
                <Line type="monotone" dataKey ="지루함" stroke="#4BAAEE" />
                <Line type="monotone" dataKey ="흥미" stroke="#FF8DA9" />
            </LineChart>
        );
    }
}
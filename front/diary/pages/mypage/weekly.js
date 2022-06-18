import React from 'react'
import ChartWeekly from '../../components/Charts/ChartWeekly'
import Mypage from '../../components/Mypage/Mypage'

const weekly = () => {
  return (
    <div className="weekly">
      <Mypage></Mypage>
      <ChartWeekly/>
    </div>
  )
}

export default weekly
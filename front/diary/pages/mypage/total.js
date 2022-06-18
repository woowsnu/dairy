import React from 'react'
import ChartTotal from '../../components/Charts/ChartTotal'
import Mypage from '../../components/Mypage/Mypage'

const total = () => {
  return (
    <div className="total">
      <Mypage></Mypage>
      <ChartTotal/>
    </div>
  )
}

export default total
import Link from 'next/link'
import React from 'react'

const registComplete = () => {
  return (
    <>
      <div>회원가입이<br/>완료되었습니다</div>
      <div><Link href="/">메인 페이지로 이동</Link></div>
    </>
    
  )
}

export default registComplete
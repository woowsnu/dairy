import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <>
        <div>로그인</div>
        <div>
            <input class="login-form" id="user-email" type="string" placeholder="아이디" required />
        </div>
        <div>
            <input class="login-form" id="password" type="password" placeholder="비밀번호" required />
        </div>
        <div>
            <input class="login-keeping" id="check-keeping" name="check-keeping"type="checkbox" />
            <label class="login-keeping-label" for="check-keeping">로그인 유지</label>
        </div>
        <div>
            {/* <button><Link href="">로그인</Link></button> */}
        </div>
        <div>
            아직 회원이 아니신가요? <Link href="/regist">회원가입</Link>
        </div>
        <div>
            비밀번호를 잊으셨나요? <Link href="/findpw">비밀번호 찾기</Link>
        </div>
    </>
  )
}

export default login
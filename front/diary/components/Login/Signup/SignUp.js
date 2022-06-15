import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { registUserAPI } from '../../../lib/api/user';

const SignUp = () => {

  // 회원가입 입력 폼에 들어갈 항목
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [profile, setProfile] = useState('');

  const router = useRouter();

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };
  const profileChangeHandler = (event) => {
    setProfile(event.target.value);
  };

  const signUp = () => {
    const user = {
      user_name: id,
      user_password: password,
      user_email: email,
      user_nickname: nickname,
      user_profile: profile,
    }
    // 확인용
    // console.log(user);

    registUserAPI(user);

    setId('');
    setPassword('');
    setEmail('');
    setNickname('');
    setProfile('');

    router.replace('/user/regist_com')

  }

  return (
    <>
      <div className="title">회원가입</div>
      <div>
        아이디<br/>
        <input id="regist-id" type="text" value={id} onChange={idChangeHandler} placeholder="영문 소문자, 숫자 조합해 4자 이상 입력해주세요" required />
      </div>
      <div>
        비밀번호<br/>
        <input id="regist-pw" type="password" value={password} onChange={passwordHandler} placeholder="영문 소문자, 숫자 조합해 8자 이상 입력해주세요" required />
      </div>      
      <div>
        비밀번호 확인<br/>
        {/* <input id="check-pw" type="password" value={password} placeholder="비밀번호를 한 번 더 입력해주세요" required /> */}
      </div>
      <div>
        이메일<br/>
        <input id="regist-email" type="email" value={email} onChange={emailChangeHandler} placeholder="이메일을 입력해주세요" required />
      </div>
      <div>
        닉네임<br/>
        <input id="regist-nickname" type="text" value={nickname} onChange={nicknameChangeHandler} placeholder="닉네임을 입력해주세요" required />
      </div>
      <div>
        프로필이미지<br/>
        <input id="regist-profile" type="text" value={profile} onChange={profileChangeHandler} placeholder="임시프로필을 입력해주세요" required />
      </div>
      <div>
        <button type="button" onClick={signUp}>회원가입</button>
      </div>

    </>
  )
}

export default SignUp
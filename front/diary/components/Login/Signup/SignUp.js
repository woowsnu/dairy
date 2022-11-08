import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { registUserAPI } from '../../../lib/api/user';
import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import Button from "../../UI/Button"

const SignUp = () => {

  // 회원가입 입력 폼에 들어갈 항목
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  const router = useRouter();

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };

  const signUp = () => {
    const user = {
      username: id,
      password: password,
      email: email,
      nickname: nickname,
    }
    // 확인용
    // console.log(user);

    registUserAPI(user);

    setId('');
    setPassword('');
    setEmail('');
    setNickname('');

    router.replace('/user/regist_com')

  }

  return (
    <Container>
      <div className="title">회원가입</div>
      <div>
        <p className='label'>username</p>
        <input className="input" id="regist-id" type="text" value={id} onChange={idChangeHandler} placeholder="영문 소문자, 숫자 조합해 4자 이상 입력해주세요" required />
      </div>
      <div>
      <p className='label'>비밀번호</p>
        <input className="input" id="regist-pw" type="password" value={password} onChange={passwordChangeHandler} placeholder="영문 소문자, 숫자 조합해 8자 이상 입력해주세요" required />
      </div>      
      <div>
      <p className='label'>이메일</p>
        <input className="input" id="regist-email" type="email" value={email} onChange={emailChangeHandler} placeholder="이메일을 입력해주세요" required />
      </div>
      <div>
      <p className='label'>닉네임</p>
        <input className="input" id="regist-nickname" type="text" value={nickname} onChange={nicknameChangeHandler} placeholder="닉네임을 입력해주세요" required />
      </div>
      <div>
        <Button type="button" onClick={signUp} label='회원가입' />
      </div>
    </Container>
  )
}

export default SignUp

const Container = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;

  .title {
    ${fonts.H1};
    color: ${colors.primary};
    margin-top: 50px; 
    margin-bottom: 40px;
  }

  .input {
    width: 90%;
    padding: 16px;
    margin-top: 6px;
    ${fonts.Caption}
    color: ${colors.gray4};
    outline: 1px soilid ${colors.gray5};
  }

  .input:focus {
    outline: 1px soilid ${colors.primary};
  }

  .label {
    ${fonts.Caption};
    padding: 8px 0 4px 0;
    color: ${colors.gray3}
  }
`;
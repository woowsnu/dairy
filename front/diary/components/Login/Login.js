import Link from 'next/link'
import { useRouter } from 'next/router';
import React, {useState} from 'react'
import { loginUserAPI } from '../../lib/api/user';
import styled from 'styled-components';
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Button from "../UI/Button";

const login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const idChangeHandler = (event) => {
        setId(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const logIn = () =>{
        const inputUser = {
            user_name: id,
            user_password: password,
        }
        console.log("logIn");
        console.log(inputUser);
        
        loginUserAPI(inputUser);

        setId('');
        setPassword('');
        
        router.replace('/');
    }

  return (
    <Container>
        <h1 className="title">로그인</h1>
        <input className='input' id="user-name" type="text" value ={id} onChange={idChangeHandler} placeholder="아이디" required />
        <input className='input' id="user-password" type="password" value ={password} onChange={passwordChangeHandler} placeholder="비밀번호" required />
        <Button type="button" onClick={logIn}>로그인</Button>
        <div className='user-link'>
        <div>
            아직 회원이 아니신가요? <Link href="/user">회원가입</Link>
        </div>
        <div>
            비밀번호를 잊으셨나요? <Link href="/findpw">비밀번호 찾기</Link>
        </div>
        </div>
    </Container>
  )
}

export default login

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

  .user-link {
    text-decoration: none;
    ${fonts.Body2};
    color: ${colors.gray2};
  }
`;
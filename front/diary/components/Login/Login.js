import Link from 'next/link'
import { useRouter } from 'next/router';
import React, {useState} from 'react'
import { loginUserAPI } from '../../lib/api/user';

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
    <>
        <div>로그인</div>

        {/* <form action={logIn} method="POST">
            <input type="text" name="user_name"/><br/>
            <input type="password" name="password"/><br/>
            <input type="submit" value="로그인"/>
        </form> */}
        <div><input id="user-name" type="text" value ={id} onChange={idChangeHandler} placeholder="아이디" required /></div>
        <div><input id="user-password" type="password" value ={password} onChange={passwordChangeHandler} placeholder="비밀번호" required /></div>
        <button type="button" onClick={logIn}>로그인</button>



        {/* <div>
            <input class="login-form" id="user-name" type="text" value ={id} placeholder="아이디" required />
        </div>
        <div>
            <input class="login-form" id="password" type="password" value={password} placeholder="비밀번호" required />
        </div>
        <div>
            <input class="login-keeping" id="check-keeping" name="check-keeping"type="checkbox" />
            <label class="login-keeping-label" for="check-keeping">로그인 유지</label>
        </div>
        <div>
            <button type="button" onClick={logIn}>로그인</button>
        </div> */}
        <div>
            아직 회원이 아니신가요? <Link href="/user">회원가입</Link>
        </div>
        <div>
            비밀번호를 잊으셨나요? <Link href="/findpw">비밀번호 찾기</Link>
        </div>
    </>
  )
}

export default login
import React, { useState } from "react";
import styled from "styled-components";
import { User } from "../@types/signup";
import LoginButton from "../components/common/LoginButton";
import SignUpOrLogin from "../components/login/signup-or-login";

const SignUpPage = () => {
  const [form, setForm] = useState({});
  const onSubmit = () => {
    new User(form)
      .postSignUp()
      .then((res) => console.log(res.message))
      .catch((err) => console.error(err));
  };
  return (
    <BackGround>
      <div>
        <Wrapper>
          <h1>회원가입</h1>
          <div>
            <input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              placeholder="이름"
            />
            <input
              onChange={(e) => setForm({ ...form, id: e.target.value })}
              type="text"
              placeholder="아이디"
            />
            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <LoginButton onClick={() => onSubmit()}>회원가입</LoginButton>
        </Wrapper>
        <SignUpOrLogin type="login" />
      </div>
    </BackGround>
  );
};
const BackGround = styled.section`
  background-color: #fafafa;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Wrapper = styled.section`
  width: 20rem;
  height: 20rem;
  background-color: #ffffff;
  border: 1px solid #dddcdc;
  text-align: center;
  input {
    width: 80%;
    height: 2rem;
    margin: 0.5rem;
    background-color: aliceblue;
    border-radius: 3px;
    border: 0.5px solid #dddcdc;
    font-size: 0.7rem;
    padding-left: 0.3rem;
    &:focus {
      outline: 0.3px solid #9c9c9c;
    }
  }
`;

export default SignUpPage;

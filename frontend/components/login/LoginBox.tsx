import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import LoginButton from "../common/LoginButton";

const LoginBox = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <Wrapper>
      <Image
        src="/assets/images/textLogo.png"
        alt="logo"
        width={220}
        height={120}
        className="text_logo"
      />
      <input
        value={id}
        type="id"
        onChange={(e) => setId(e.target.value)}
        placeholder="전화번호,사용자 이름 또는 이메일"
      />
      <input
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        type="password"
        placeholder="비밀번호"
      />
      <LoginButton>Login</LoginButton>
      <LoginBottom>
        <div className="or_box">
          <div className="line" />
          <p>또는</p>
          <div className="line" />
        </div>
        <div className="face_pw">
          <div className="facebook"> Facebook으로 로그인</div>
          <div> 비밀번호를 잊으셨나요?</div>
        </div>
      </LoginBottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 20rem;
  height: 25rem;
  background-color: #ffffff;
  border: 1px solid #dddcdc;
  text-align: center;
  .text_logo {
    width: 200px;
  }
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
const LoginBottom = styled.article`
  .or_box {
    display: flex;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #adadad;
    .line {
      width: 30%;
      border: 0.2px solid #adadad;
      margin: 0 1rem;
    }
  }
  .face_pw {
    font-size: 0.8rem;
    .facebook {
      color: #1d4faa;
      font-weight: 700;
    }
    div {
      padding: 0.3rem;
      cursor: pointer;
    }
  }
`;

export default LoginBox;

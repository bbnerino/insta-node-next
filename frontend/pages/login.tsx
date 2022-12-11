import React from "react";
import styled from "styled-components";
import LoginBox from "../components/login/LoginBox";
import PhoneImage from "../components/login/PhoneImage";
import SignUpOrLogin from "../components/login/signup-or-login";

const index = () => {
  return (
    <Wrapper>
      <PhoneImage />
      <div>
        <LoginBox />
        <SignUpOrLogin type="signup" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  background-color: #fafafa;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default index;

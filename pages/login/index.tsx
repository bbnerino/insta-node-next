import React from "react";
import styled from "styled-components";
import LoginBox from "../../components/login/LoginBox";
import PhoneImage from "../../components/login/PhoneImage";
import SignUpBox from "../../components/login/SignUpBox";

const index = () => {
  return (
    <Wrapper>
      <PhoneImage />
      <div>
        <LoginBox />
        <SignUpBox />
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

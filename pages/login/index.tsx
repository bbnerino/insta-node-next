import React from "react";
import styled from "styled-components";
import PhoneImage from "../../components/login/PhoneImage";

const index = () => {
  return (
    <Wrapper>
      <h1>LOGIN</h1>
      <PhoneImage />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
`;

export default index;

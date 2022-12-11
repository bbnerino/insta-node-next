import Link from "next/link";
import React from "react";
import styled from "styled-components";

const SignUpBox = () => {
  return (
    <Wrapper>
      계정이 없으신가요? <Link href={"/signup"}>가입하기</Link>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  width: 20rem;
  height: 3rem;
  background-color: #ffffff;
  border: 1px solid #dddcdc;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  a {
    color: #5486e2;
    font-weight: 600;
    padding-left: 0.5rem;
  }
`;

export default SignUpBox;

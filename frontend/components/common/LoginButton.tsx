import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  children: string;
}

const LoginButton = ({ children, onClick }: Props) => {
  return <Wrapper onClick={() => onClick()}>{children}</Wrapper>;
};
const Wrapper = styled.button`
  background-color: #0095f6;
  width: 80%;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 5px;
  border: 0.5px solid #dddcdc;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  padding-left: 0.3rem;
`;
export default LoginButton;

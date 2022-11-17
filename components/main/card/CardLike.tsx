import Image from "next/image";
import React from "react";
import styled from "styled-components";

const CardLike = () => {
  const likes = ["son", "a", "b", "c", "d", "e", "f", "g", "h"];
  return (
    <Wrapper>
      <Image
        className="profile_image"
        src="/assets/images/son.jpg"
        width={25}
        height={25}
        alt="profile"
      />
      <strong>{likes[0]}</strong>님 <span>외 {likes.length - 1}명</span> 이
      좋아합니다.
    </Wrapper>
  );
};
const Wrapper = styled.article`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  font-size: 0.9rem;
  strong {
    color: #5a005a;
  }
  span {
    cursor: pointer;
  }
  .profile_image {
    border-radius: 100%;
    border: 0.3px solid #adadad;
    margin: 10px 10px;
  }
`;
export default CardLike;

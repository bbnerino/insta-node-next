import Image from "next/image";
import React from "react";
import styled from "styled-components";
import CardInfoBox from "./CardInfo";
import CardLike from "./CardLike";
import CardTitle from "./CardTitle";
import Comments from "./Comments";
import UserInfoBox from "./UserInfoBox";
const Card = () => {
  return (
    <Wrapper>
      <UserInfoBox />
      <Image
        className="card_image"
        src="/assets/images/1.png"
        height={500}
        width={450}
        alt="image"
      />
      <CardInfoBox />
      <CardLike />
      <CardTitle />
      <Comments />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 451px;
  height: 900px;
  margin: auto;
  margin-top: 50px;
  border-radius: 10px;
  border: 0.5px solid #adadad;
  .card_image {
  }
`;

export default Card;

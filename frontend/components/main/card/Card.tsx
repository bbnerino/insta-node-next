import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Article } from "../../../@types/article";
import CardInfoBox from "./CardInfo";
import CardLike from "./CardLike";
import CardTitle from "./CardTitle";
import Comments from "./Comments";
import UserInfoBox from "./UserInfoBox";

interface Props {
  article: Article;
}

const Card = ({ article }: Props) => {
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
      <CardTitle article={article} />
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

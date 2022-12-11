import React from "react";
import styled from "styled-components";

const Comments = () => {
  const comments = [
    { user: "son", content: "몇개읎는 폴로 주섬주섬,. 감사합니당" },
    { user: "bon", content: "바보같은 나를 용서하지마" },
    { user: "jon", content: "하잇하잇 너무 즐거워" },
  ];
  return (
    <Wrapper>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <div className="user">{comment.user}</div>
          <div className="content">{comment.content}</div>
        </div>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.article`
  padding: 20px 10px;
  text-align: center;
  font-size: 0.9rem;

  .comment {
    display: flex;
    padding: 2px;
  }
  .user {
    font-weight: 600;
    padding-right: 1rem;
  }
  .content {
  }
`;
export default Comments;

import React, { useState } from "react";
import styled from "styled-components";

const CardTitle = () => {
  const article = {
    user: "son",
    title: "가을 바짓가랑이 잡고 늘어지는 중...",
    content: "바보같은 나에게 한번 더 기회를 주는 것",
  };
  const [more, setMore] = useState(false);
  return (
    <Wrapper>
      <div className="title_box">
        <div className="user">{article.user}</div>
        <div className="title">{article.title}</div>
        {!more && (
          <button className="see_more" onClick={() => setMore(true)}>
            더보기
          </button>
        )}
      </div>
      {more && <div className="content"> {article.content}</div>}
    </Wrapper>
  );
};
const Wrapper = styled.article`
  padding: 5px 10px;
  .title_box {
    display: flex;
  }
  .user {
    font-weight: 600;
    padding-right: 10px;
  }
  .title {
    font-size: 0.9rem;
  }
  .see_more {
    color: #adadad;
  }
  .content {
    padding-top: 1rem;
    font-size: 0.9rem;
  }
`;
export default CardTitle;

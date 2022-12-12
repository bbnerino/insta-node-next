import React, { useState } from "react";
import styled from "styled-components";
import { Article } from "../../@types/article";
import { getToken } from "../../helper/axios";

const ArticleCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const token = getToken()
  const onSubmit = () => {
    const newArticle = new Article();
    newArticle.title = title;
    newArticle.content = content;
    if (!token) {
      return alert("유저 정보 없음");
    }
    newArticle.userGuid = token;
    newArticle
      .create()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <Wrapper>
      <input type="file" />
      <input
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        placeholder="내용"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={() => onSubmit()}>게시</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    width: 20rem;
    height: 1.5rem;
    margin: 2rem auto;
  }
  textarea {
    height: 10rem;
  }
`;

export default ArticleCreate;

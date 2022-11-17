import React, { useState } from "react";
import styled from "styled-components";

const CardInfoBox = () => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  return (
    <Wrapper>
      <div className="left">
        {!like && (
          <button className="heart" onClick={() => setLike(!like)}>
            🤍
          </button>
        )}
        {like && (
          <button className="heart" onClick={() => setLike(!like)}>
            💗
          </button>
        )}
        <button className="bubble">🗨️</button>
      </div>
      {!save && (
        <button className="save" onClick={() => setSave(!save)}>
          🏳️
        </button>
      )}
      {save && (
        <button className="save" onClick={() => setSave(!save)}>
          🏴
        </button>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.article`
  height: 50px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
  }
  button {
    font-size: 1.5rem;
    padding: 5px;
  }
  .bubble {
    padding-left: 10px;
  }
  .save {
    padding-right: 20px;
  }
`;
export default CardInfoBox;

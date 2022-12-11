import Image from "next/image";
import React from "react";
import styled from "styled-components";
import MoreButton from "../../common/MoreButton";

const UserInfoBox = () => {
  const user = {
    name: "hm_son7",
    location: "London, United Kingdom",
  };
  return (
    <Wrapper>
      <div className="left">
        <Image
          className="profile_image"
          src="/assets/images/son.jpg"
          width={40}
          height={40}
          alt="profile"
        />
        <Profile>
          <div className="name">{user.name}</div>
          <div className="location">{user.location}</div>
        </Profile>
      </div>
      <div className="right">
        <MoreButton />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  height: 60px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
  }
  .right {
    margin: 13px;
  }
  .profile_image {
    border-radius: 100%;
    border: 0.3px solid #adadad;
    margin: 10px 10px;
  }
`;
const Profile = styled.div`
  margin: 10px;
  .name {
    font-size: 1rem;
    font-weight: 600;
  }
  .location {
    font-size: 0.7rem;
    padding-top: 0.2rem;
    color: #727272;
  }
`;
export default UserInfoBox;

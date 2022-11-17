import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PhoneImage = () => {
  // 이미지를 URL 로 불러오기 위해서 바벨을 설정해야 하는이유
  // TIMER 함수에서 저 값을 왜 저렇게 쓴거에요?
  // lazy 로딩때문에 이미지를 못불러온다!
  const images = [
    "https://img.appstory.co.kr/@files/monthly.appstory.co.kr/thum/Bdatafile/Board/dir_100/10045.jpg?v=1505277932",
    "https://i.ytimg.com/vi/XtamHkfkKZ0/maxresdefault.jpg",
    "https://lunasoft.co.kr/images/homepage/instagram/Scenrio2_feed.png",
    "https://platum.kr/wp-content/uploads/2015/10/instagram-logo-650x365.jpg",
  ];
  let timer: any = null;
  const [count, setCount] = useState(0);

  const updateCount = () => {
    timer = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    updateCount();
    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper>
      <Image
        className="mobile"
        src="/assets/images/mobile.png"
        width={300}
        height={500}
        alt="mobile"
      />
      {images.map((image, idx) => (
        <Image
          key={image}
          src={image}
          width={280}
          height={480}
          unoptimized={true}
          alt="mobile"
          className={idx === count ? "insta_image" : "no_image"}
        />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-right: 4rem;
  .mobile {
    position: absolute;
    z-index: 2;
  }
  .insta_image {
    z-index: 1;
    border-radius: 40px;
    margin-left: 10px;
    margin-top: 12px;
    animation: fadein 1s;
  }
  .no_image {
    display: none;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1000px) {
    & {
      display: none;
      animation: fadein 1s;
    }
  }
`;
export default PhoneImage;

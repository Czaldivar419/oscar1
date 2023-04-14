import React from 'react';
import { BannerTitle, BannerButton, BannerSection } from './styled/homepage.styled';

const Banner = () => {
    const handleButtonClick = (event, target) => {
        const targetElement = document.querySelector(target);
        if (targetElement) {
          const offset = targetElement.offsetTop;
          window.scrollTo({
            top: offset - 100,
            behavior: "smooth"
          });
        }
      };

  return (
    <BannerSection id="Banner">
      <BannerTitle>Transform Your Space</BannerTitle>
      <BannerButton onClick={(event)=>handleButtonClick(event, "#Contact")}>Get Started</BannerButton>
    </BannerSection>
  );
};

export default Banner;
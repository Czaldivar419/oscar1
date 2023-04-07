import React from "react";

import { BannerSection, BannerTitle, BannerDescription, BannerButton } from "./styled/homepage.styled";

function Banner() {
    return (
<BannerSection id='Home'>
<BannerTitle>Quality Flooring Services</BannerTitle>
<BannerDescription>Transform your space with our expert flooring services</BannerDescription>
<BannerButton>Get Started</BannerButton>
</BannerSection>
    );
  }
  export default Banner;
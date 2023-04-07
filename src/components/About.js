import React from "react";
import { AboutUsSection, AboutUsTitle, AboutUsDescription, AboutUsImage } from '../components/styled/homepage.styled';

const About = () => {
  return (
    <AboutUsSection id="About">
      <div>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsDescription>
          Rialto Flooring is a dedicated team of expert craftsmen with years of experience delivering exceptional flooring and construction services. We're committed to exceeding our clients' expectations by providing top-quality craftsmanship, unmatched customer service, and creating beautiful and functional spaces. We offer a wide range of services, including hardwood, laminate, vinyl, and tile flooring installation, remodeling, and custom home building. Trust us to bring your vision to life with the highest standards of quality and customer service. Contact us today to schedule a consultation and experience the difference that quality and expertise can make.
        </AboutUsDescription>
      </div>
      <div>
        <AboutUsImage src="tilefloor.webp" alt="About Us" />
      </div>
    </AboutUsSection>
  );
};

export default About;
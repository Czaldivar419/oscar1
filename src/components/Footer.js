import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FooterContainer, FooterText, SocialMediaContainer, SocialMediaLink } from "./styled/homepage.styled";

function Footer() {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <SocialMediaLink href="https://twitter.com/rialtoflooring">
          <FaTwitter size={30} />
        </SocialMediaLink>
        <SocialMediaLink href="https://www.instagram.com/rialto_flooring/?hl=en">
          <FaInstagram size={30} />
        </SocialMediaLink>
      </SocialMediaContainer>
      <FooterText>
        Connect with us on social media!
      </FooterText>
      <FooterText>© 2023 Rialto Flooring. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
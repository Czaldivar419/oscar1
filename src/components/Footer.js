import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { 
  FooterContainer, 
  FooterText, 
  SocialMediaContainer, 
  SocialMediaLink, 
  AddressContainer, 
  AddressText 
} from "./styled/homepage.styled";

function Footer() {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <SocialMediaLink href="https://www.facebook.com/rialtoflooring/">
          <FaFacebook size={30} />
        </SocialMediaLink>
        <SocialMediaLink href="https://www.instagram.com/rialto_flooring/?hl=en">
          <FaInstagram size={30} />
        </SocialMediaLink>
      </SocialMediaContainer>
      <FooterText>
        Connect with us on social media!
      </FooterText>
      <AddressContainer>
        <AddressText>128 S Riverside Ave.</AddressText>
        <AddressText>Rialto, CA 92376</AddressText>
        <AddressText>(909) 258-2905</AddressText>
      </AddressContainer>
      <FooterText>© 2023 Rialto Flooring. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
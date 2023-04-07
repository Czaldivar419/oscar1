import React, { useState } from "react";

import { NavbarContainer, Hamburger, 
  TransparentButton, HamburgerContainer, NavLinks, ExitButton } from "./styled/homepage.styled";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <a href="/">Logo</a>
      <TransparentButton />
      <HamburgerContainer>
        <Hamburger isOpen={isOpen} onClick={toggleNav}>☰</Hamburger>
        <ExitButton isOpen={isOpen} onClick={closeNav}>×</ExitButton>
      </HamburgerContainer>
      <NavLinks isOpen={isOpen}>
        <li>
          <a href="#home" onClick={closeNav}>Home</a>
        </li>
        <li>
          <a href="#About" onClick={closeNav}>About</a>
        </li>
        <li>
          <a href="#Services" onClick={closeNav}>Services</a>
        </li>
        <li>
          <a href="#contact" onClick={closeNav}>Contact Us</a>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Header;
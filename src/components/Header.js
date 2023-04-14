import React, { useState } from "react";

import { 
  NavbarContainer, 
  Logo, 
  Hamburger, 
  TransparentButton, 
  HamburgerContainer, 
  NavLinks, 
  ExitButton
   } from "./styled/homepage.styled";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleScrollTo = (event, target) => {
    event.preventDefault();
    const offset = document.querySelector(target).offsetTop;
    window.scrollTo({
      top: offset - 100,
      behavior: "smooth"
    });
    closeNav();
  };

  return (
    <NavbarContainer>
      <Logo>
        <img src='logo.png' alt='logo'/>
      </Logo>
      <TransparentButton />
      <HamburgerContainer>
        <Hamburger isOpen={isOpen} onClick={toggleNav}>☰</Hamburger>
        <ExitButton isOpen={isOpen} onClick={closeNav}>×</ExitButton>
      </HamburgerContainer>
      <NavLinks isOpen={isOpen}>
        <li>
          <a href="#Home" onClick={(event) => handleScrollTo(event, "#Banner")}>Home</a>
        </li>
        <li>
          <a href="#Services" onClick={(event) => handleScrollTo(event, "#Services")}>Services</a>
        </li>
        <li>
          <a href="#About" onClick={(event) => handleScrollTo(event, "#About")}>About</a>
        </li>
        <li>
          <a href="#Vendors" onClick={(event) => handleScrollTo(event, "#Vendors")}>Vendors</a>
        </li>
        <li>
          <a href="#Contact" onClick={(event) => handleScrollTo(event, "#Contact")}>Contact</a>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Header;
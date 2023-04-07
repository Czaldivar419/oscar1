import styled from 'styled-components';

export const AboutUsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 65px;
  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
  & > div {
    width: 100%;
    max-width: 800px;
    text-align: center;
    @media (min-width: 576px) {
      width: 50%;
      text-align: left;
    }
  }
  `;

export const AboutUsContent = styled.div`
  width: 90%;
  max-width: 800px;
`;

export const AboutUsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const AboutUsDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
`;

export const AboutUsImage = styled.img`
  display: block;
  margin: 0 auto 20px;
  max-width: 100%;
  border: 3px solid #ccc;
  border-radius: 1%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;


export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const FooterText = styled.p`
  margin: 0;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-left: 50px;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }
`;


export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: line-height .3s ease-in-out;
  line-height: ${({ isOpen }) => (isOpen ? "5rem" : "3.5rem")};
`;

export const HamburgerContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Hamburger = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};
`;

export const TransparentButton = styled.div`
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-120%")};
    width: 100%;
    height: calc(100vh - 80px);
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    margin-top: .5rem;
  }
  li:not(:last-child) {
    margin-right: 2rem;
  }
  a {
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    padding: 1rem;
    &:hover {
      color: #666;
    }
  }
`;

export const ExitButton = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-image: url('/flooring3.jpeg'); /* Replace with the URL or path to your desired image */
  background-size: cover; /* Adjust as needed to fit the image properly */
  background-position: bottom; /* Adjust as needed to position the image properly */
`;

export const BannerTitle = styled.h2`
  font-size: 3rem;
  color: white;
	text-shadow: -1px 1px 2px #000,
				  1px 2px 6px #000,
				  1px -1px 0 #000,
				  -1px -1px 0 #000;
  margin-bottom: 20px;
  text-align: center;
`;

export const BannerDescription = styled.p`
  font-size: 1.2rem;
  color: white;
  color: white;
	text-shadow: -1px 1px 2px #000,
				  1px 2px 6px #000,
				  1px -1px 0 #000,
				  -1px -1px 0 #000;
  margin-bottom: 20px;
  text-align: center;
`;

export const BannerButton = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

export const ServicesSection = styled.section`
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 25px;
  }
  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ServiceItem = styled.li`
  width: 33.33%;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ServiceIcon = styled.img`
  display: block;
  margin: 0 auto 20px;
  max-width: 100%;
  border: 3px solid #ccc; /* add a border of 3px width and color #ccc */
  border-radius: 1%; /* add a circular border by setting the border radius to 50% */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* add a subtle box-shadow for a 3D effect */
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const TestimonialsSection = styled.section`
  padding: 50px;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const TestimonialsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TestimonialItem = styled.li`
  width: 33.33%;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.2rem;
`;

export const TestimonialAuthor = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
  font-weight: bold;
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #eee;
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  font-size: 1.2rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

export const MapSection = styled.section`
  position: relative;
  padding: 0;
  height: 500px;
`;

export const Map = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
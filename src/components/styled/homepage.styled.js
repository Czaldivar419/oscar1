import styled from 'styled-components';

export const AboutUsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px;
  background-color: #f9f9f9; /* add a light gray background color */
  transition: background-color 0.3s ease-in-out; /* add a transition effect */

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
  font-size: 3rem; /* increase the font size */
  margin-bottom: 20px;
  text-align: center;

`;

export const AboutUsDescription = styled.p`
  font-size: 1.3rem; /* increase the font size */
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;

  @media (max-width: 576px) {
    font-size: 1.1rem;
    padding: 10px;
  }
`;

export const AboutUsImage = styled.img`
  display: block;
  margin: 0 auto 20px;
  max-width: 100%;
  max-height: 70vh;
  width: auto;
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
  margin: 10px 0;
`;

export const AddressContainer = styled.div`
  margin-top: 20px;
`;

export const AddressText = styled.p`
  margin: 5px 0;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SocialMediaLink = styled.a`
  margin: 0 10px;
  color: #fff;

  &:hover {
    color: #ccc;
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

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }
  img {
    width: 100px;
    height: auto;
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
    transition: all 0.7s ease-in-out;
    margin-top: .5rem;
  }
  li:not(:last-child) {
    text-align: center;
  }
  li:last-child {
    text-align: center;
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
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 1px;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.75);
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
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ServiceItem = styled.li`
  width: 33%;
  padding: 10px;
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
  background-color: #f9f9f9;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: #333;
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
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
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

export const VendorsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  place-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    /* Add responsive styles for smaller screens here */
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  place-items: center;

  }
`;

export const VendorLogo = styled.a`
  text-align: center;
  display: block;
  width: 150px;
  height: 150px;
  margin: 10px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const VendorTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  `;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ContactHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;

export const ContactSubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #666;
  }
`;

export const MessageSentContainer = styled.div`
  background-color: #4BB543;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

export const ContactInfoContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactInfoText = styled.p`
  margin-bottom: .1rem;
  padding: 0rem 2.5rem;
  font-size: 1.2rem;
  text-align: center;
`;

export const MapContainer = styled.div`
  width: 40%;
  height: 400px;
  margin-left: 5%; /* change this value as needed for desired spacing */

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    height: 400px;
    margin-left: 0;
  }
`;
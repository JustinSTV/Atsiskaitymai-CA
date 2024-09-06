import styled from "styled-components";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
    background-color: darkslategray;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color: white;
  padding: 20px 40px;

  >div.socials{
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 15px 0;

    >h2{
      margin-bottom: 10px;
    }
    >div>svg{
      margin: 0 10px;
      font-size: 3rem;
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="socials">
        <h2>Contact Us through Social Media</h2>
        <div>
          <FaFacebookSquare />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
      <p>&copy; Copyrighted by Justas</p>
    </StyledFooter>
  );
}
 
export default Footer
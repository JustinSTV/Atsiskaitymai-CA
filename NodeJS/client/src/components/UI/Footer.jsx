import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const StyledFooter = styled.footer`
  height: 200px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  text-align: center;
  
  >div{
    >div.logo{
      margin-bottom: 10px;
      >h1{
        margin: 0;
        color: white;
        >span{
          background-color: blue;
          padding: 5px 10px;
          border-radius: 10px;
        }
      }
    }
  }

  .social-icons {
    margin: 10px 0;
    a {
      color: white;
      margin: 0 10px;
      font-size: 34px;
      text-decoration: none;
      &:hover {
        color: #427676;
      }
    }
  }

  .location {
    margin-top: 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div className="logo">
          <h1>You <span>Book</span></h1>
        </div>
        &copy; 2024 All rights reserved.
      </div>
      <div className="social-icons">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="location">
        <p>123 Library St, Kaunas, Lithuania</p>
        <p>Mon-Fri: 9am - 6pm | Sat-Sun: 10am - 4pm</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
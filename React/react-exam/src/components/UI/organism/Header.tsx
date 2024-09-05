import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 80px;
  margin: 20px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        logo
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Add Post</li>
        </ul>
      </nav>
      <div className="userButtons">
        <button>Login</button>
        <button><Link to='/register'>Register</Link></button>
      </div>
    </StyledHeader>
  );
}
 
export default Header;
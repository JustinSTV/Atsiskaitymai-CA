import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import UserContext, {UserContextType} from "../../../contexts/UserContext";

const StyledHeader = styled.header`
  height: 80px;
  margin: 20px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Header = () => {
  const navigate = useNavigate();

  const { loggedInUser, logoutUser } = useContext(UserContext) as UserContextType;

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
        {
          loggedInUser ? 
          <>
            <p>Weclome, {loggedInUser.username}</p>
            <button
              onClick={() => {
                logoutUser()
                navigate('/')
              }}
            >
              Log Out</button>
          </> :
          <>
            <button><Link to='/login'>Login</Link></button>
            <button><Link to='/register'>Register</Link></button>
          </>
        }
      </div>
    </StyledHeader>
  );
}
 
export default Header;
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

  >div.userButtons{
    display: flex;
    flex-direction: column;
    gap: 10px;


    >div.nameAndPfp{
      display: flex;
      align-items: center;
      gap: 10px;
      >img{
        width: 50px;
        height: 50px;
      }
    }
  }

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
            <div className="nameAndPfp">
              <img src={loggedInUser.profilePicture} alt={loggedInUser.username} />
              <p>Weclome, {loggedInUser.username}</p>
            </div>
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
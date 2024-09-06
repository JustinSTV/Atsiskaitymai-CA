import { useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";

import { GiBathtub } from "react-icons/gi";

import UserContext, {UserContextType} from "../../../contexts/UserContext";

const StyledHeader = styled.header`
  height: 80px;
  margin: 20px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  >div.logo{
    display: flex;
    align-items: center;
    gap: 5px;
    >svg{
      font-size: 4rem;
    }
  }

  >nav{
    >ul{
      display: flex;
      gap: 10px;

      >li{
        list-style-type: none;
        padding: 8px 15px;
        border-radius: 10px;
        background-color: black;

        >a{
          text-decoration: none;
          font-size: 1.2rem;
          color: white;
        }
      }
    }
  }

  >div.userButtons{
    display: flex;
    flex-direction: column;
    gap: 10px;

    >button{
      background-color: black;
      border: none;
      padding: 8px 15px;
      border-radius: 10px;
      color: white;
      >a{
        color: white;
        text-decoration: none;
      }
    }
    >button:hover{
      cursor: pointer;
    }

    >div.nameAndPfp{
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      >img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
    }
  }

`;

const Header = () => {
  const navigate = useNavigate();

  const { loggedInUser, logoutUser } = useContext(UserContext) as UserContextType;

  const goToUserPage = () => {
    navigate('/userPage')
  }

  return (
    <StyledHeader>
      <div className="logo">
        <GiBathtub />
        <h2>Bath</h2>
      </div>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='addPost'>Add Post</NavLink></li>
        </ul>
      </nav>
      <div className="userButtons">
        {
          loggedInUser ? 
          <>
            <div className="nameAndPfp" onClick={() => {goToUserPage()}}>
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
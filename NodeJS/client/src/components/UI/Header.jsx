import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  
  >div.logo{
    display: flex;
    align-items: center;
    
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

  nav{
    display: flex;
    justify-content: center;
    gap: 10px;
    >a {
      margin: 0 15px;
      text-decoration: none;
      color: white;
      padding: 10px 20px;
      background-color: blue;
      border-radius: 10px;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <h1>You <span>Book</span></h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">All Books</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
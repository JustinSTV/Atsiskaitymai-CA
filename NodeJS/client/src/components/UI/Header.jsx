import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 80px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">Home</Link>
      <Link to="/books">All Books</Link>
    </StyledHeader>
  );
}

export default Header;
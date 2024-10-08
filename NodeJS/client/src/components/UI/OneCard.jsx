import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: darkslategray;
  color: white;
  border-radius: 10px;
  padding: 10px 5px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;

  >h3{
    text-align: center;
    margin-bottom: 10px;
  }

  >div.info{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  >a{
    align-self: center;
    margin-top: auto;
    color: white;
    padding: 10px 20px;
    background-color: #427676;
    border-radius: 10px;
    text-decoration: none;
  }
`;

const OneCard = ({ book }) => {
  return (
    <StyledDiv>
      <h3>{book.title}</h3>
      <div className="desc">
        <p>{book.description.slice(0, 80)}...</p>
      </div>
      <p><strong>Author: </strong> {book.author}</p>
      <p><strong>Publish Date: </strong> {book.publishDate}</p>
      <p><strong>Genres: </strong> {book.genres.join(', ')}</p>
      <div className="info">
        <p><strong>Pages: </strong>{book.pages}</p>
        <p><strong>Rating: </strong>{book.rating}</p>
        <p><strong>Copies left: </strong>{book.amountOfCopies}</p>
      </div>
      <Link to={`/books/${book._id}`} target="_blank">Read More</Link>
    </StyledDiv>
  );
}

export default OneCard;
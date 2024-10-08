import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 50px;
  color: white;
  >div{
    background-color: darkslategray;
    display: flex;
    gap: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    >div.img> img{
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 500px;
    }

    >div.aboutBook{
      padding: 20px;
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 15px;

      >div.info{
        display: flex;
        gap: 15px;
      }
      >button{
        align-self: center;
        width: 50%;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #427676;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
`;

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5500/book/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  const handleGoBack = () => {
    window.close();
  };

  return (
    <StyledSection>
      <div>
        <div className="img">
          <img src={book.imageUrl} alt={book.title} />
        </div>
        <div className="aboutBook">
          <h2>{book.title}</h2>
          <p><strong>Description: </strong>{book.description}</p>
          <p><strong>Author: </strong>{book.author}</p>
          <p><strong>Publish Date: </strong>{book.publishDate}</p>
          <p><strong>Genres: </strong>{book.genres.join(', ')}</p>
          <div className="info">
            <p><strong>Pages: </strong>{book.pages}</p>
            <p><strong>Rating: </strong>{book.rating}</p>
            <p><strong>Copies left: </strong>{book.amountOfCopies}</p>
          </div>
          <button className="goBackButton" onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
    </StyledSection>
  );
}

export default BookDetails;
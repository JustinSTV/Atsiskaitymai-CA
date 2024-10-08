import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .banner {
    width: 100%;
    height: 200px;
    background-color: #427676;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;

    .images {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      img {
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }

    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 2;
      position: relative;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px 20px;
      border-radius: 10px;

      >h1 span{
        background-color: blue;
        padding: 5px 10px;
        border-radius: 10px;
      }
    }
  }

  .stats {
    color: white;
    font-size: 18px;
    margin-top: 20px;
  }
`;

const HomePage = () => {
  const [totalBooks, setTotalBooks] = useState(0);
  const [bookImages, setBookImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/allBooks')
      .then(res => res.json())
      .then(({ totalBooks, data }) => {
        setTotalBooks(totalBooks);
        setBookImages(data.map(book => book.imageUrl));
      })
  }, []);

  return (
    <StyledSection>
      <div className="banner">
        <div className="images">
          {
            bookImages.map((image, index) => (
              <img key={index} src={image} alt={`Book ${index + 1}`} />
            ))
          }
        </div>
        <div className="text">
          <h1>Welcome to You <span>Book</span></h1>
        </div>
      </div>
      <div className="stats">
        We have a total of {totalBooks} books available.
      </div>
    </StyledSection>
  );
}

export default HomePage;
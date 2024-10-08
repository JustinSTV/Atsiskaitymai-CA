import { useEffect, useState } from "react";
import styled from "styled-components";

import OneCard from "../UI/OneCard";

const StyledSection = styled.section`
  display: grid;
  gap: 5px;
  grid-template-columns: 200px repeat(2, 1fr);
  grid-template-rows: 150px repeat(4, 1fr);

  >div.filtering{
    grid-area: 1 / 2 / 2 / 4;
    border: solid black;
  }
  >div.sorting{
    grid-area: 1 / 1 / 6 / 2; 
    border: solid black;
  }
  >div.data{
    grid-area: 2 / 2 / 6 / 4; 
    border: solid black;
  }
`;


const AllBooks = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/allBooks')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBooks(data)
      })
  }, [])

  return (
    <StyledSection>
      <div className="filtering"></div>
      <div className="sorting"></div>
      <div className="data">
        {
          books.length > 0 ? (
            books.map(book => (
              <OneCard key={book._id} book={book} />
            ))
          ) : (
            <p>No Books Available</p>
          )
        }
      </div>
    </StyledSection>
  );
}

export default AllBooks;
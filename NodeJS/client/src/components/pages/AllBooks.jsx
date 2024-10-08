import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import OneCard from "../UI/OneCard";
import Sort from "../UI/Sort";
import Filters from "../UI/Filters";

const StyledSection = styled.section`
  display: grid;
  gap: 5px;
  grid-template-columns: 200px repeat(2, 1fr);
  grid-template-rows: 150px repeat(4, 1fr);

  >div.sorting{
    grid-area: 1 / 2 / 2 / 4;
    border: solid black;
  }
  >div.filtering{
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
  const [formInputs, setFormInputs] = useState({
    title: '',
    genres_in: [],
    publishDate_gte: '',
    publishDate_lte: '',
    available: false,
  })

  let sortString = useRef('');
  let filterString = useRef('');

  const formInputControl = (e) => {
    if (e.target.type === 'checkbox') {
      if (e.target.name === 'genres_in') {
        if (e.target.checked) { // Add genre
          setFormInputs({
            ...formInputs,
            [e.target.name]: [...formInputs.genres_in, e.target.value]
          });
        } else { // Remove genre
          setFormInputs({
            ...formInputs,
            [e.target.name]: formInputs.genres_in.filter(genre => genre !== e.target.value)
          });
        }
      } else { // Handle 'available' checkbox
        setFormInputs({
          ...formInputs,
          [e.target.name]: e.target.checked
        });
      }
    } else {
      setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.type === 'number' ? e.target.valueAsNumber : e.target.value
      });
    }
  };

  const fetchFiltered = (e) => {
    e.preventDefault();

    filterString.current = '';
    Object.keys(formInputs).forEach(key => {
      if (formInputs[key]) {
        if (key === 'genres_in') {
          if (Array.isArray(formInputs.genres_in) && formInputs.genres_in.length > 0) {
            filterString.current += `filter_${key}=${formInputs[key].join(',')}&`;
          }
        } else if (key === 'available') {
          if (formInputs.available) {
            filterString.current += `filter_amountOfCopies_gte=1&`;
          }
        } else if (key === 'publishDate_gte' || key === 'publishDate_lte') {
          filterString.current += `filter_${key}=${String(formInputs[key])}&`;
        } else {
          filterString.current += `filter_${key}=${formInputs[key]}&`;
        }
      }
    });
    fetch(`http://localhost:5500/allBooks?${filterString.current}&${sortString.current}`)
      .then(res => res.json())
      .then(data => setBooks(data));
  }

  useEffect(() => {
    fetch('http://localhost:5500/allBooks')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  const fetchSorted = (e) => {
    sortString.current = `sort_${e.target.value}`;
    fetch(`http://localhost:5500/allBooks?${filterString.current}&${sortString.current}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }

  return (
    <StyledSection>
      <div className="filtering">
        <Filters
          fetchFiltered={fetchFiltered}
          formInputControl={formInputControl}
          formInputs={formInputs}
        />
      </div>
      <div className="sorting">
        <Sort fetchSorted={fetchSorted} />
      </div>
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
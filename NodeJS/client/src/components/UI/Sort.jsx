import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  >button{
    color: white;
    background-color: #427676;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

const Sort = ({ fetchSorted }) => {
  return (
    <StyledDiv>
      <button
        value={'rating=1'}
        onClick={fetchSorted}
      >Rating ASC</button>
      <button
        value={'rating=-1'}
        onClick={fetchSorted}
      >Rating DESC</button>
      <button
        value={'pages=1'}
        onClick={fetchSorted}
      >Pages ASC</button>
      <button
        value={'pages=-1'}
        onClick={fetchSorted}
      >Pages DESC</button>
      <button
        value={'publishDate=1'}
        onClick={fetchSorted}
      >Publish date ASC</button>
      <button
        value={'publishDate=-1'}
        onClick={fetchSorted}
      >Publish date DESC</button>
    </StyledDiv>
  );
}

export default Sort;
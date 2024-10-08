import styled from "styled-components";

const StyledForm = styled.form`
  height: 100%;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  >div{
    width: 100%;
    display: flex;
    flex-direction: column;

    >input{
      padding: 10px;
      border-radius: 5px;
      border: 0.5px solid black;
    }

    >fieldset{
      padding: 10px;
      border-radius: 5px;
      >div{
        margin: 5px 0;
        >input[type='checkbox']{
          margin: 0 10px;
        }
      }
    }
  }
  > div:nth-child(5){
    display: block;
    >input[type='checkbox']{
      margin: 0 10px;
    }
  }
  >input[type='submit']{
    border: none;
    color: white;
    background-color: #427676;
    padding: 10px 20px;
    border-radius: 10px;
    width: 50%;
    cursor: pointer;
  }
`;

const Filters = ({ fetchFiltered, formInputControl, formInputs }) => {
  return (
    <StyledForm onSubmit={fetchFiltered}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title" name="title"
          value={formInputs.title}
          onChange={formInputControl}
        />
      </div>
      <div>
        <fieldset>
          <legend>Select book genre:</legend>
          <div>
            <label htmlFor="history">History</label>
            <input
              type="checkbox"
              name="genres_in" id="history"
              value="History"
              onChange={formInputControl}
            />
          </div>
          <div>
            <label htmlFor="romance">Romance</label>
            <input
              type="checkbox"
              name="genres_in" id="romance"
              value="Romance"
              onChange={formInputControl}
            />
          </div>
          <div>
            <label htmlFor="fiction">Fiction</label>
            <input
              type="checkbox"
              name="genres_in" id="fiction"
              value="Fiction"
              onChange={formInputControl}
            />
          </div>
          <div>
            <label htmlFor="literary">Literary</label>
            <input
              type="checkbox"
              name="genres_in" id="literary"
              value="Literary"
              onChange={formInputControl}
            />
          </div>
        </fieldset>
      </div>
      <div>
        <label htmlFor="publishDate_gte">Publish Date From:</label>
        <input
          type="number"
          id="publishDate_gte" name="publishDate_gte"
          max={formInputs.publishDate_lte}
          value={formInputs.publishDate_gte}
          onChange={formInputControl}
        />
      </div>
      <div>
        <label htmlFor="publishDate_lte">Publish Date To:</label>
        <input
          type="number"
          id="publishDate_lte" name="publishDate_lte"
          min={formInputs.publishDate_gte}
          value={formInputs.publishDate_lte}
          onChange={formInputControl}
        />
      </div>
      <div>
        <label htmlFor="available">Available:</label>
        <input
          type="checkbox"
          id="available" name="available"
          checked={formInputs.available}
          onChange={formInputControl}
        />
      </div>
      <input type="submit" value="Filter" />
    </StyledForm>
  );
}

export default Filters;
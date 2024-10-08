const Filters = ({ fetchFiltered, formInputControl, formInputs }) => {
  return (
    <form onSubmit={fetchFiltered}>
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
    </form>
  );
}

export default Filters;
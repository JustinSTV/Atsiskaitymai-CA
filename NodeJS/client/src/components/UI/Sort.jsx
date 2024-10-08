const Sort = ({ fetchSorted }) => {
  return (
    <div>
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
    </div>
  );
}

export default Sort;
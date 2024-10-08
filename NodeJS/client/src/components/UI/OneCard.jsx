import { Link } from "react-router-dom";

const OneCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.description.slice(0, 100)}...</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genres:</strong> {book.genres.join(', ')}</p>
      <p><strong>Publish Date:</strong> {book.publishDate}</p>
      <p><strong>Pages:</strong>{book.pages} Pages</p>
      <p><strong>Rating:</strong>{book.rating}</p>
      <p><strong>Copies left:</strong>{book.amountOfCopies}</p>
      <Link to={`/books/${book._id}`} target="_blank">Read More</Link>
    </div>
  );
}

export default OneCard;
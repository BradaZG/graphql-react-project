import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetails = (props) => {
  const { loading, data } = useQuery(getBookQuery, {
    variables: { id: props.bookId },
  });

  if (loading) return <p>Loading....</p>;

  const displayBookDetails = () => {
    const res = data.book;
    if (res) {
      return (
        <div>
          <h2>{res.name}</h2>
          <p>{res.genre}</p>
          <p>{res.author.name}</p>
          <p>All books by this author:</p>
          <ul className='other-books'>
            {res.author.books.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };

  return <div id='book-details'>{displayBookDetails()}</div>;
};

export default BookDetails;

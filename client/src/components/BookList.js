import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getBooksQuery } from '../queries/queries';

import BookDetails from './BookDetails';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Ops! Something went wrong</p>;

  return (
    <div>
      <ul id='book-list'>
        {data.books.map((book) => {
          return (
            <li key={book.id} onClick={(e) => setSelected(book.id)}>
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;

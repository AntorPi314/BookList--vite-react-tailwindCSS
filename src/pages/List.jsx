import ListRow from "./ListRow";


function List({ books, searchKeyword, ontoggleFav }) {
  console.log(books);

  let row = [];
  books.forEach((book) => {
    if (book.bookName && book.bookName.toLowerCase().includes(searchKeyword.toLowerCase())) {
      row.push(<ListRow key={book.id} book={book} ontoggleFav={ontoggleFav} />);
    }
  });

  return (
    <ul className="space-y-2">
      {row}
    </ul>
  );
}

export default List;

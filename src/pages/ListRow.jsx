import ListDetails from "./ListDetails";
import ListFav from "./ListFav";
import PropTypes from "prop-types";

function ListRow({ book, ontoggleFav }) {
  return (
    <>
      <div
        className="flex items-center justify-between p-4 bg-white shadow rounded-md m-2"
      >
        <ListDetails bookName={book.bookName} author={book.author} />
        <span />
        <ListFav book={book} ontoggleFav={ontoggleFav} />
      </div>
    </>
  );
}

export default ListRow;

ListRow.prototype = {
  book: PropTypes.shape({
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    fav: PropTypes.bool.isRequired,
  }).isRequired,
};

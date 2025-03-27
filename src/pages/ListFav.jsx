import { Star } from "lucide-react";


function ListFav({ book, ontoggleFav }) {
  return (
    <>
      <button onClick={() => ontoggleFav(book.id)}>
        <Star color={book.fav ? 'yellow' : 'gray'} size={20} />
        
      </button>
    </>
  );
}

export default ListFav;

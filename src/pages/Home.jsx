import Header from "./Header";
import List from "./List";
import Search from "./Search";
import { useState } from "react";

const jsonData = [
  {
    id: 1,
    bookName: "Book 1",
    author: "Author 1",
    fav: false,
  },
  {
    id: 2,
    bookName: "Book 2",
    author: "Author 2",
    fav: true,
  },
  {
    id: 3,
    bookName: "Book 3",
    author: "Author 3",
    fav: false,
  },
];

function Home() {
  const [books, setBooks] = useState(jsonData);
  const [searchKeyword, setSearchKeyword] = useState("");
  const toggleFav = (id) => {
    setBooks(books.map((book) => {
      if(book.id === id) {
        return { ...book, fav: !book.fav }; 
      }
      return book;
    }));
  };
  return (
    <>
      <Header />
      <Search
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <List books={books} searchKeyword={searchKeyword} ontoggleFav={toggleFav}/>
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import Book from "../components/Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => setBooks(data));
  //   }, []);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("booksData.json");
        if (!res.ok) {
          throw new Error("Network res was not ok");
        }
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4 md:mb-9">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

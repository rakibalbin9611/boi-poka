import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../Utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleWishList = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 px-4 md:px-10 lg:px-20 py-12">
      {/* Image Section */}
      <div className="max-w-[220px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[260px] md:mt-24">
        <img
          src={image}
          alt={bookName}
          className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col text-center px-4 lg:text-left w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold playfair-display">
          {bookName}
        </h1>
        <p className="text-lg md:text-xl mt-2  font-medium">By: {author}</p>

        <div className="my-4 text-base md:text-lg text-green-600 font-semibold">
          {category}
        </div>

        <p className="text-sm text-left md:text-base  work-sans leading-relaxed mt-4 ">
          <span className="font-bold">Review:</span> {review}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 my-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base  my-4">
          <p>📄 Number of Pages:</p>
          <p className="font-semibold">{totalPages}</p>

          <p>🏢 Publisher:</p>
          <p className="font-semibold">{publisher}</p>

          <p>📅 Year of Publishing:</p>
          <p className="font-semibold">{yearOfPublishing}</p>

          <p>⭐ Rating:</p>
          <p className="font-semibold">{rating}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="bg-white text-black border border-gray-300 px-6 py-2 rounded-xl shadow hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Mark as Read
          </button>

          <button
            onClick={() => handleWishList(bookId)}
            className="bg-blue-100 text-blue-800 px-6 py-2 rounded-xl shadow hover:bg-blue-200 hover:scale-105 transition-all duration-300"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

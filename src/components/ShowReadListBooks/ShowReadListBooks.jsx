import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const ShowReadListBooks = ({ readBook, handleRemoveReadItem }) => {
  const navigate = useNavigate();

  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = readBook;

  const hanldeViewDetail = () => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-6 rounded-xl border p-4 shadow-md bg-white max-w-4xl mx-auto">
      {/* Book Image */}
      <div className="w-full md:w-32 shrink-0 flex justify-center items-center">
        <img
          src={image}
          alt={bookName}
          className="rounded-md shadow-md p-4 w-32 md:w-full h-auto object-contain"
        />
      </div>

      {/* Book Info */}
      <div className="flex flex-col justify-between w-full text-center md:text-left">
        <div>
          {/* Title + Delete */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {bookName}
              </h2>
              <p className="text-sm md:text-base text-gray-600">By: {author}</p>
            </div>
            <button
              onClick={() => handleRemoveReadItem(bookId)}
              className="text-red-600 text-3xl"
            >
              <MdDelete />
            </button>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-2 text-sm text-gray-500 mt-3">
            <span>📍 Year: {yearOfPublishing}</span>
            <span>🏢 Publisher: {publisher}</span>
            <span>📄 Pages: {totalPages}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center gap-4 mt-4">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
            Category: {category}
          </span>
          <span className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full">
            Rating: {rating}
          </span>
          <button
            onClick={hanldeViewDetail}
            className="
          bg-gradient-to-r from-green-500 to-green-600
          text-white
          border border-green-600
          px-6 py-2 rounded-xl
          shadow-md
          hover:from-green-600 hover:to-green-700
          hover:scale-105
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-green-300/50
        "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowReadListBooks;

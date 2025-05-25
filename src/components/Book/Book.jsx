import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookName, author, image, rating, category, tags, bookId } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w- md:w-96 shadow-xl p-6">
        <figure className="rounded-2xl bg-white py-8">
          <img className="h-[166px] object-cover" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="rounded-md work-sans  text-base font-medium px-4 py-2  text-green-500"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="text-2xl playfair font-bold">{bookName}</h2>
          <p className="text-base work-sans  font-medium">By : {author}</p>
          <div className="flex w-full flex-col border-opacity-50">
            <div className="divider"></div>
          </div>
          <div className="card-actions justify-between">
            <div className="text-base work-sans font-medium">{category}</div>
            <div className="flex items-center justify-center gap-2 work-sans text-base font-medium">
              <p>{rating}</p>
              <p className="text-2xl work-sans">
                <CiStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

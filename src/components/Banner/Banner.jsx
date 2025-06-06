import React from "react";
import bannerImg from "../../assets/books.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero my-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-xs md:max-w-md rounded-lg shadow-2xl"
        />
        <div className="md:mr-20 ">
          <h1 className="text-4xl md:text-5xl playfair-display font-bold mb-12">
            Books to freshen up <br /> your bookshelf
          </h1>
          <Link to={`/listedBooks`}>
            <button className="bg-green-600 text-white font-semibold text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 rounded-2xl shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 ease-in-out w-fit">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

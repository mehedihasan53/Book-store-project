import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    bookId,
  } = singleBook;

  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="bg-white w-full max-w-sm rounded-xl shadow-md  ">
        {/* Image */}
        <figure className="bg-gray-100 rounded-t-xl flex justify-center items-center p-6 h-64">
          <img
            src={image}
            alt={bookName}
            className="object-contain h-full w-auto"
          />
        </figure>
        {/* Body */}
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-4">
            {tags.map((tag) => (
              <button className="btn rounded-2xl text-green-500 bg-green-50">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="text-xl font-semibold text-[#131313] card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>

          <p className="text-gray-600 font-medium">by {author}</p>

          <div className="flex justify-between items-center pt-3 border-t">
            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
              {category}
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
              ⭐ {rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

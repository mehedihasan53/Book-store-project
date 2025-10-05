import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  if (!singleBook) {
    return <p className="text-center text-xl py-20">Book not found!</p>;
  }

  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
    review,
    tags,
  } = singleBook;

  const handleReadBook = () => {
    addToDB(bookId);
  };

  return (
    <section className="bg-white text-white min-h-screen py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left side: Book image */}
        <div className="flex-1 flex justify-center bg-gray-100 p-20">
          <img
            src={image}
            alt={bookName}
            className="w-full max-w-sm rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right side: Details */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            {bookName}
          </h1>
          <p className="text-lg text-gray-500">By : {author}</p>
          <p className="text-xl text-green-400 font-semibold">{category}</p>

          {/* Review */}
          <div>
            <h3 className="text-lg font-semibold mb-1 text-black">Review :</h3>
            <p className="text-gray-600 leading-relaxed">
              {review || "No review available."}
            </p>
          </div>

          {/* Tags */}
          {tags && (
            <div className="flex flex-wrap gap-3 pt-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 rounded-full bg-green-500 text-white text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="space-y-2 text-gray-800 pt-4">
            <p>
              <strong>Number of Pages:</strong> {totalPages}
            </p>
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
            <p>
              <strong>Year of Publishing:</strong> {yearOfPublishing}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {rating}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={handleReadBook}
              className="bg-white text-[#131313] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition border"
            >
              Read
            </button>
            <button className="bg-[#38BDF8] px-8 py-3 rounded-lg font-semibold hover:bg-[#0ea5e9] transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;

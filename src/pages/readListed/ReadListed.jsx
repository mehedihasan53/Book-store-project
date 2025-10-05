import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utility/addToDB";
import { FaBook, FaStar } from "react-icons/fa";

const ReadListed = () => {
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storeBookData = getStoreBook();
    const myReadList = data.filter((book) =>
      storeBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPages = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList(sortByPages);
    }
    if (type === "rating") {
      const sortByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortByRating);
    }
  };

  const BookCard = ({ book }) => {
    return (
      <>
        <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col lg:flex-row p-4 gap-6 w-full max-w-4xl mx-auto">
          {/* Left: Book Image */}
          <div className="flex-shrink-0 w-full lg:w-48 p-2 bg-gray-50 rounded-lg">
            <img
              src={book.image}
              alt={book.bookName}
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* Right: Book Info */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Title & Author */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <FaBook className="text-blue-500" /> {book.bookName}
              </h2>
              <p className="text-gray-600 mt-1">By: {book.author}</p>

              {/* Publisher & Page */}
              <p className="text-gray-500 mt-2">
                Publisher: {book.publisher} | Pages: {book.totalPages}
              </p>

              {/* Year */}
              <p className="text-gray-500">Year: {book.yearOfPublishing}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {book.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Info: Category, Rating, Button */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {book.category}
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <FaStar /> {book.rating}
              </span>
              <button className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-200 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container mx-auto py-10 ">
        <div className="dropdown dropdown-right ">
          <div tabIndex={0} role="button" className="btn m-1">
            shot by: {sort ? sort : ""}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("rating")}>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto py-10 flex flex-col gap-6">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {readList.length === 0 ? (
              <p className="text-center text-xl py-10">No read books yet!</p>
            ) : (
              <div className="flex flex-col gap-6">
                {readList.map((book) => (
                  <BookCard key={book.bookId} book={book} />
                ))}
              </div>
            )}
          </TabPanel>

          <TabPanel>
            {wishlist.length === 0 ? (
              <p className="text-center text-xl py-10">
                No wishlist books yet!
              </p>
            ) : (
              <div className="flex flex-col gap-6">
                {wishlist.map((book) => (
                  <BookCard key={book.bookId} book={book} />
                ))}
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ReadListed;

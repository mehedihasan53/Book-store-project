import React, { Suspense } from "react";
import Book from "./Book/Book";

const Books = ({ data }) => {
  //   console.log(data);
  //   const [books, setBooks] = useState([]);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-5">Books</h1>
      <Suspense fallback={<span>Loading.....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-4 place-items-center">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;

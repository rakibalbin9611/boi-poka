import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredList,
  getStoredWishList,
  removeFromReadList,
} from "../Utility/addToDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShowReadListBooks from "../ShowReadListBooks/ShowReadListBooks";
import ShowWishListBooks from "../ShowWishListBooks/ShowWishListBooks";
const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const [sort, setSort] = useState("");

  const allBooks = useLoaderData();
  //   console.log(allBooks);

  useEffect(() => {
    // read list books
    const storedReadList = getStoredList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readListBooks = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    // wish list books
    const storeWishList = getStoredWishList();
    const storeWishListInt = storeWishList.map((id) => parseInt(id));

    const wishList = allBooks.filter((book) =>
      storeWishListInt.includes(book.bookId)
    );
    // console.log(wishList);

    setReadBooks(readListBooks);
    setWishList(wishList);
  }, []);

  // Sort functionalities
  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "No of pages") {
      const sortedReadList = [
        ...readBooks.sort((a, b) => a.totalPages - b.totalPages),
      ];
      setReadBooks(sortedReadList);
    }
    if ((sortType = "Ratings")) {
      const sorteReadList = [...readBooks.sort((a, b) => b.rating - a.rating)];
      setReadBooks(sorteReadList);
    }
  };

  // remove read list from UI
  const handleRemoveReadItem = (id) => {
    // remove from UI
    const remainingReadBooks = readBooks.filter((book) => book.bookId !== id);
    setReadBooks(remainingReadBooks);

    // remove from LocalStorage
    removeFromReadList(id);
  };
  return (
    <div>
      {/* Sort Button - Centered, Responsive, Clean & Versatile for Dark/Light */}
      <div className="flex justify-center mb-6">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-600 text-white  text-lg sm:text-xl md:text-2xl font-semibold py-6 px-6 rounded-lg shadow-md "
          >
            {sort ? `Sort by: ${sort}` : "Sort by"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu  border rounded-lg z-[1] w-52 p-2 shadow-lg dark:bg-neutral-900 dark:text-white"
          >
            <li onClick={() => handleSort("Ratings")}>
              <a className=" rounded-md p-2 transition">Ratings</a>
            </li>
            <li onClick={() => handleSort("No of pages")}>
              <a className=" rounded-md p-2 transition">No of pages</a>
            </li>
          </ul>
        </div>
      </div>

      {/* TABS */}
      <Tabs>
        <TabList>
          <Tab>Read list Books</Tab>
          <Tab>Wish list Books</Tab>
        </TabList>

        <TabPanel>
          {readBooks.map((readBook, index) => (
            <ShowReadListBooks
              key={index}
              readBook={readBook}
              handleRemoveReadItem={handleRemoveReadItem}
            />
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((book, idx) => (
            <ShowWishListBooks key={idx} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

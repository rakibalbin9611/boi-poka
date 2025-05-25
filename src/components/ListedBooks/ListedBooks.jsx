import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredList, getStoredWishList } from "../Utility/addToDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShowReadListBooks from "../ShowReadListBooks/ShowReadListBooks";
import ShowWishListBooks from "../ShowWishListBooks/ShowWishListBooks";
const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

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
  return (
    <div>
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
            ></ShowReadListBooks>
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((book, idx) => (
            <ShowWishListBooks key={idx} book={book}></ShowWishListBooks>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredList } from "../Utility/addToDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShowReadListBooks from "../ShowReadListBooks/ShowReadListBooks";
const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);

  const allBooks = useLoaderData();
  //   console.log(allBooks);

  useEffect(() => {
    const storedReadList = getStoredList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readListBooks = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadBooks(readListBooks);
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
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

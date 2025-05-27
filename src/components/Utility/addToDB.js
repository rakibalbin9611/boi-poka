import { toast } from "react-toastify";

const getStoredList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    toast("Already in wish list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    toast("Added in wish list");
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    toast("Already in read list", id);
  } else {
    storedList.push(id);
    const storeListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storeListStr);
    toast("Added in read list");
  }
};
const removeFromReadList = (id) => {
  // console.log(typeof id);
  const idStr = id.toString();
  const books = getStoredList(); // Array of IDs [this IDs are string ]
  // console.log(books);
  const remaining = books.filter((bookId) => bookId !== idStr);
  localStorage.setItem("read-list", JSON.stringify(remaining));
};
const removeFromWishList = (id) => {
  // console.log(typeof id);
  const idStr = id.toString();
  const books = getStoredWishList(); // Array of IDs [this IDs are string ]
  // console.log(books);
  const remaining = books.filter((bookId) => bookId !== idStr);
  localStorage.setItem("wish-list", JSON.stringify(remaining));
};

export {
  addToStoredReadList,
  addToStoredWishList,
  getStoredList,
  getStoredWishList,
  removeFromReadList,
  removeFromWishList,
};

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
    console.log("Already in wish list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    console.log("Already in read list", id);
  } else {
    storedList.push(id);
    const storeListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storeListStr);
  }
};

export {
  addToStoredReadList,
  addToStoredWishList,
  getStoredList,
  getStoredWishList,
};

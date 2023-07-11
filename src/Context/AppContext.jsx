import { createContext, useState } from "react";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  let storedUsers = localStorage.getItem("currentUser") || [];

  const [isCartLoaded, setIsCartLoaded] = useState("false");
  const [userData, setUserData] = useState(storedUsers);
  const [userEmail, setUserEmail] = useState("");
  const [items, setItems] = useState(null);
  const removeFromCart = (id) => {
    let cartItems = localStorage.getItem("data");
    cartItems = JSON.parse(cartItems);
    const newCartItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("data", JSON.stringify(newCartItems));
    setIsCartLoaded(!isCartLoaded);

    return "Item Removed Successfully";
  };
  const addToCart = (id) => {
    let isLoggedIn = window.localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      return "Please login First to Add Item";
    }
    const itemToAdd = items.filter((item) => {
      return item._id === id;
    });
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let obj = {
      id: itemToAdd[0]._id,
      name: itemToAdd[0].name,
      price: itemToAdd[0].price,
      description: itemToAdd[0].description,
      image: itemToAdd[0].image,
    };
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
    return itemToAdd[0].name.toUpperCase() + " Added to Cart Successfully";
  };

  return (
    <AppContext.Provider
      value={{
        removeFromCart,
        userData,
        setUserData,
        userEmail,
        setUserEmail,
        items,
        setItems,
        addToCart,
        isCartLoaded,
        setIsCartLoaded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

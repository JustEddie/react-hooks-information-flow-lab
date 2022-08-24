import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  const appClass = `App ${isDarkMode ? "dark" : "light"}`
  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} theme={isDarkMode ? "Dark" : "Light"}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

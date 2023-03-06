import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// dynamically setting
// returning as array
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // creating usestate hooks
  const [menuItems, setMenuItems] = useState(items);
  // passing allCategories in category
  const [categories, setCategories] = useState(allCategories);
  // creating mannually
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    // filter method used and return if catogory is matched
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>

        {/* passing props as filterItems and categories(allCategories) */}
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

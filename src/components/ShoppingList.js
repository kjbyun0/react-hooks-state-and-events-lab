import React, { useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleSelectedCategory(e) {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  }

  const filteredItems = items.filter(item => selectedCategory === 'All' || selectedCategory === item.category);
  // console.log("selectedCategory: ", selectedCategory);
  // console.log('filteredItems', filteredItems);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

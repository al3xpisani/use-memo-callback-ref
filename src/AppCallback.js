import { useState, useCallback } from "react";
import { Item } from "./AppCallBackItem";

function AppCallBackItem() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [wishList, setWishList] = useState([]);

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  const addItemToWishList = useCallback((item) => {
    setWishList((state) => [...state, item]);
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <Item key={item} onAddToWishList={addItemToWishList} title={item} />
          );
        })}
      </ul>
    </div>
  );
}

export const App = AppCallBackItem;

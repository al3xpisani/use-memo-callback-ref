import * as React from "react";

const { memo } = React;

function ItemComponent(props) {
  return (
    <li>
      {" "}
      titulo {props.title}
      <button onClick={() => props.onAddToWishList(props.title)}>
        Add to WishList
      </button>
    </li>
  );
}

export const Item = memo(ItemComponent);

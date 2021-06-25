import * as React from "react";

const { memo } = React;

function ItemComponent(props) {
  return <li> titulo {props.title}</li>;
}

export const Item = memo(ItemComponent);

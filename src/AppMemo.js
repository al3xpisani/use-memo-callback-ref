import { useState } from "react";
import { Item } from "./item-app-memo";

function AppMemo() {
  const [items, setItems] = useState([]);

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  return (
    <div>
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map((item) => {
          return <Item key={item} title={item} />;
        })}
      </ul>
    </div>
  );
}

export const App = AppMemo;

/*
useRef,useMemo, useCallback,etc... must be implemented
in your code-behind to avoid the React reconciliation
rendering algorithm to be executed.

 when to use memo on <Item />

 1. pure functional components
 When the function returns always the same repetitive items
 you must use memo. Because memo checks all the items in the
 list. If all these titles are equal, memo logics is faster
 to identify when update the <Item> component.
 Memo updates only the <Item that was changed.

 2. when Renders too often
 Its cool to think about it. A lot of rendering its cool
 to use memo to avoid this component be updated (rendered)
 all the time.

 3. Re-renders with same props.
 Avoid to use memo with different props values, because
 memo works like a index database. If the index differs to
 much its not good indexing. its cool to use the same values
 so memo can run its algorithm and identify what will be rendered.

 4. Avoid to use memo on small components. The React
 reconciliation algorithm is designed to be optimized and
 using memo in small components may increase bottleneck

 ------------------------------------------------------

 When use useCallback

 Lets understand shallow compare first of all.

 i.e. We have on <Item title={xxxx}>

 Shallow compare algorithm checks if the old_Title 
 is strict equally === to the new_Title.

 if yes, it returns false. It cancells the rendering.

 react docs says : 

shallowCompare performs a shallow equality check on 
the current props and nextProps objects 
as well as the current state and nextState objects.
 


*/

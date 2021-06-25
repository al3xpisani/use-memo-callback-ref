# use-memo-callback-ref
make uses of Memo for components, useCallback and useRef

useRef,useMemo, useCallback,etc... must be implemented
in your code-behind to avoid the React reconciliation
rendering algorithm to be executed.

When to use memo on <Item />

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

All the items were renderized because the Add to WishList button reference changes every time a new item is added. 
Everytime a new item is added , the function will be recreated and a new reference will do the  logic render.
This is rendered again because one property has changed (the addToWishList passed as props in the button.






Even the shallow compare algorithm will check if the old_function reference is equal to the new_function reference. In this case, its different always and the render will be executed.


To avoid the re-render we use useCallback.
Callback is a way to tell react memorize the exsting function reference and not be updated everytime a new item is added.



See the difference below. No items were rendered even typing in the inputText and set value on it.
useCallback memoized the function reference and did not render.



![image](https://user-images.githubusercontent.com/14879580/123462447-b9a57e80-d5c0-11eb-819e-9d999d0d116a.png)





import { useRef } from "react";

function LogButtonClicks() {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current}`);
  };
  console.log("I rendered");

  return (
    <div>
      {countRef.current}
      <button onClick={handle}>Click</button>
    </div>
  );
}

export default LogButtonClicks;

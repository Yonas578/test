import { Another } from "./assets/Another";
import { useEffect, useState, useRef } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  const person = { name: "yonas", age: 22 };

  function getName({ name }) {
    return name;
  }
  function calculateSum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a + b;
    } else {
      return null;
    }
  }

  return (
    <>
      {show && <Another calculateSum={calculateSum} />}
      <button onClick={() => setShow(!show)}>show / hide</button>
      <h1>{getName(person)}</h1>
    </>
  );
}

import { useEffect } from "react"

export function Another({calculateSum}) {
  useEffect(() => {
    return () => {
      console.log("Text hidden");
    }
  }, []);
  return <h1>Hello from another, sum of 1 ans 2 is {calculateSum(1, 2)}</h1>
}
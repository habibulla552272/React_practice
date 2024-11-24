import { useRef } from "react";
import Header from "./Header";

function Hero() {
  const number = useRef(0);
  const ptag = useRef(null);
  const apidata = useRef(null);

  const change = () => {
    number.current++;
    ptag.current.innerText = `Number: ${number.current}`;
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      apidata.current = await response.json();
      console.log("Data fetched successfully:", apidata.current);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showData = () => {
    if (apidata.current) {
      ptag.current.innerText = JSON.stringify(apidata.current, null, 2); // Pretty-printed JSON
    } else {
      ptag.current.innerText = "No data available. Please fetch data first.";
    }
  };

  return (
    <div>
      <Header />
      <p ref={ptag}></p>
      <button onClick={change}>Click</button>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
}

export default Hero;

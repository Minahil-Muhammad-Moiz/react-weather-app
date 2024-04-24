import classNames from "classnames";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import WeatherDisplay from "./Components/WeatherDisplay";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [place, setPlace] = useState("");
  
  const handleChange = () => {
    setPlace(inputVal);
  };
  return (
    <>
      <div className={classNames("p-5 w-[600px] h-[500px] backdrop-blur-3xl absolute top-0 left-0 right-0 bottom-0 m-auto rounded-lg")}>
        <div className="relative ">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className={classNames("w-full p-5 rounded-3xl outline-none")}
            placeholder="Enter City Name..."
          />
          <HiSearch onClick={handleChange} className={classNames(' hover:text-orange-400 rounded-lg ',searchIcon)} />
          {place && <WeatherDisplay place={place.toUpperCase()}/>}
        </div>
      </div>
    </>
  );
}

export default App;

// const parentDiv =;
const searchIcon =
  "absolute right-4 h-8 w-8 top-4 transition-all ";

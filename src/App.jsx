import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import WeatherDisplay from "./Components/WeatherDisplay";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [place, setPlace] = useState("");

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      if (place) {
        return await Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=dd94f859a0e52d6e4767fddf735f04a7`
        ).then((res) => res.data);
      }
    },
    enabled: false
  });

  useEffect(() => {
    refetch();
  }, [place]);

  const handleChange = (e)=>{
    setInputVal(e.target.value);
    setPlace('');
    isError(false),
    isLoading(false)
  }

  const search = () => {
    setPlace(inputVal);
    setInputVal("");
  };
  return (
    <>
      <div className={classNames('border backdrop-blur-3xl ',parentDiv)}>
        <div className="relative">
          <input
            value={inputVal}
            onChange={(e) => handleChange(e) }
            onKeyDown={(e) => {
              e.key === "Enter" && search();
            }}
            className={classNames("w-full p-5 rounded-3xl outline-none")}
            placeholder="Enter City Name..."
          />
          <HiSearch
            onClick={search}
            className={classNames(" hover:text-orange-400", searchIcon)}
          />
          {place && isLoading && <p className={classNames(pTAg)}>Loading...</p>}
          {place && !isLoading && isError && <div><p className={classNames(pTAg)}>Error 404, City not found!</p></div>}
          {!isLoading && !isError && place && <WeatherDisplay data={data} />}
        </div>
      </div>
    </>
  );
}

export default App;

const parentDiv =
  "md:p-5 p-4 md:w-[600px] h-[500px] w-[300px] backdrop-blur-3xl absolute top-0 left-0 right-0 bottom-0 m-auto rounded-3xl ";
const searchIcon = "absolute right-4 h-8 w-8 top-4 transition-all ";
const pTAg = 'text-white text-center mx-auto mt-16 text-xl font-bold'
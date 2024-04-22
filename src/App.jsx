import { useQuery } from "@tanstack/react-query";
import Axios  from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function App() {
  const [place, setPlace ] = useState('')

  const {data, refetch}= useQuery({
    queryKey:['weather'],
    queryFn:async()=>{
      return await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=dd94f859a0e52d6e4767fddf735f04a7`).then((res)=>res.data.main)
    }
  })
  console.log(data);

  const handleChange=()=>{
    refetch(place)
  }
  return (
    <>
      <div className=" w-[600px] h-[500px] backdrop-blur-md bg-white/20 absolute top-0 left-0 right-0 bottom-0 m-auto rounded-lg">
        <input value={place} onChange={(e)=>setPlace(e.target.value)} />
        <BsSearch onClick={handleChange}/>
      </div>

    </>
  );
}

export default App;

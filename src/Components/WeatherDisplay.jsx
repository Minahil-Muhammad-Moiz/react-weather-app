import { useQuery } from "@tanstack/react-query";
import  Axios  from "axios";
import React, { useEffect } from "react";

const WeatherDisplay = (props) => {
    const { data, refetch } = useQuery({
        queryKey: ["weather"],
        queryFn: async () => {
          if (props.place) {
            const response = await Axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&units=metric&appid=dd94f859a0e52d6e4767fddf735f04a7`
            );
            return response.data;
          }
        },
        enabled: false,
      });
      console.log(data);
    
      useEffect(()=>{
        refetch()
      },[props.place])
    
  return (
    <>
      <div>
        <h1>{props.place}</h1>
        <p>{data?.weather[0].main}</p>
      </div>
    </>
  );
};

export default WeatherDisplay;

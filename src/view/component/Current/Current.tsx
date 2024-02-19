
import cloud from '../../../assetes/icon/white/icons8-cloud-50 (1).png';
import Humidity from '../../../assetes/icon/white/icons8-humidity-50.png';
import wind from '../../../assetes/icon/white/icons8-wind-50 (1).png';
import temperature from '../../../assetes/icon/white/icons8-temperature-50.png';
import axios from 'axios';
import {useEffect, useState} from "react";



export function Current() {

    const [weatherData, setWeatherData] = useState([]);
    const fetchData = async (): Promise<void> => {

        try {
            const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=ba5afd4764f0f5d646f74185e3acaf5b');
            console.log(response.data);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (

       <div className={"p-5 w-full flex flex-col"}>
          <div>
              <h1 className={"flex items-center  flex-col text-xl font-bold pb-10"}>CURRENT WEATHER</h1>
          </div>

           <div className="flex gap-5 justify-evenly pt-5 text-center">
               <div className="flex-1 flex flex-col justify-center items-center">
                   <h1 className="text-lg font-medium">Colombo District, LK</h1>
                   <h1 className="text-sm ">Today, 18 Feb 2023</h1>
               </div>

               <div className="flex-1 flex flex-col justify-center items-center">
                   <h1 className="text-3xl font-bold">30°C</h1>
                   <h1 className="text-lg">Broken Clouds</h1>
               </div>

               <div className="flex-1 flex justify-center items-center">
                   <img src={cloud} alt="Cloud" className="h-16 w-16" />
               </div>
           </div>




           <div>
               <h1 className={"flex items-center justify-center flex-col pt-10 text-xl font-bold pb-5 "}>AIR CONDITIONS</h1>
           </div>

           <div className="flex gap-5 justify-evenly pt-5 text-center">
               <div className="flex-1 flex flex-col items-center">
                   <img src={temperature} alt="Temperature" className="w-[25px] h-[25px] mb-2 object-cover" />
                   <h1 className="text-md font-medium ">Temperature</h1>
                   <h1 className="text-md">37°C</h1>
               </div>

               <div className="flex-1 flex flex-col items-center">
                   <img src={wind} alt="Wind" className="w-[25px] h-[25px] mb-2 object-cover" />
                   <h1 className="text-md font-medium">Wind</h1>
                   <h1 className="text-md">1.84m/s</h1>
               </div>

               <div className="flex-1 flex flex-col items-center">
                   <img src={cloud} alt="Cloud" className="w-[25px] h-[25px] mb-2 object-cover" />
                   <h1 className="text-md font-medium">Cloud</h1>
                   <h1 className="text-md">73%</h1>
               </div>

               <div className="flex-1 flex flex-col items-center">
                   <img src={Humidity} alt="Humidity" className="w-[25px] h-[25px] mb-2 object-cover" />
                   <h1 className="text-md font-medium">Humidity</h1>
                   <h1 className="text-md">86%</h1>
               </div>
           </div>

       </div>
    );
}

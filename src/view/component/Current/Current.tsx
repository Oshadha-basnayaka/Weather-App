
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
       <div className={"p-5 w-full"}>
           {/*<div>*/}
           {/*    <h1>Weather Data</h1>*/}
           {/*    <ul>*/}
           {/*        {weatherData.list? && weatherData.list.map((item, index) => (*/}
           {/*            <li key={index}>*/}
           {/*                /!* Render data from each item here *!/*/}
           {/*                Date: {new Date(item.dt * 1000).toLocaleDateString()} - Temperature: {item.main.temp}*/}
           {/*            </li>*/}
           {/*        ))}*/}
           {/*    </ul>*/}
           {/*</div>*/}


          <div>
              <h1 className={"flex items-center justify-center flex-col text-2xl font-bold pb-10"}>CURRENT WEATHER</h1>
          </div>

           <div className={"flex  gap-5 justify-evenly pt-5 text-center "}>
              <div className={"flex-1"}>
                  <h1 className={"flex items-center justify-center flex-col "}>Colombo distric Lk </h1>
                  <h1>to day 17 feb 2023</h1>
              </div>

               <div className={"flex-1"}>
                   <h1>30~c</h1>
                   <h1>Broken cloudes</h1>
               </div>

               <div className={"flex-1 justify-center items-center flex"}>
                   <img src={cloud} alt=""/>
               </div>
           </div>



           <div>
               <h1 className={"flex items-center justify-center flex-col pt-20 text-2xl font-bold pb-5 "}>AIR CONDITIONS</h1>
           </div>

           <div className="flex gap-5 justify-evenly pt-5 text-center">
               <div className="flex-1 flex flex-col items-center">
                   <img src={temperature} alt="Temperature" className="h-12 w-12 mb-2" />
                   <h1 className="text-lg font-medium">Temperature</h1>
                   <h1 className="text-lg">37°C</h1>
               </div>

               <div className="flex-1 flex flex-col items-center">
                   <img src={wind} alt="Wind" className="h-12 w-12 mb-2" />
                   <h1 className="text-lg font-medium">Wind</h1>
                   <h1 className="text-lg">1.84m/s</h1>
               </div>

               <div className="flex-1 flex flex-col items-center">
                   <img src={cloud} alt="Cloud" className="h-12 w-12 mb-2" />
                   <h1 className="text-lg font-medium">Cloud</h1>
                   <h1 className="text-lg">73%</h1>
               </div>

               <div className="flex-1 flex flex-col items-center">
                   <img src={Humidity} alt="Humidity" className="h-12 w-12 mb-2" />
                   <h1 className="text-lg font-medium">Humidity</h1>
                   <h1 className="text-lg">86%</h1>
               </div>
           </div>

       </div>
    );
}

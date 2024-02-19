import searchicon from '../../../assetes/icon/icons8-search-50.png';
import {useState} from "react";
import {Api} from "../../../api/Api";


export function Search() {

    const api ={

        key:"ba5afd4764f0f5d646f74185e3acaf5b",
        base:"https://api.openweathermap.org/data/3.0/",
    };

    const [search, setSearch] = useState<string>("");

    const searchpress = () =>{
       fetch(`${api.base}weather?q=${search}&units=metrics&APPID=${api.key}`)
           .then(res => res.json())
           .then(result =>{
               console.log(result);
           })
    }

    return (
       <div className={"flex flex-col  w-full pb-10 justify-center items-center gap-10   "}>
           <div className={" w-full  font-bold flex flex-col text-center items-center font-Pacifico gap-3"}>
               <h1 className={"text-white text-2xl p-5"}>LIVE WEATHER</h1>
               <input onChange={(e) =>setSearch(e.target.value)} type={"text"} placeholder={"Search..."} className={" w-5/6 rounded-xl px-4  border border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-[15px] text-[15px] lg:w-4/6  xl:w-3/6"}/>
               <button className={"font-medium text-white border rounded p-1 "} onClick={searchpress}>Search</button>
           </div>

       </div>
    );
}

import searchicon from '../../../assetes/icon/icons8-search-50.png';



export function Search() {
    return (
       <div className={"flex flex-col  w-full pb-20 justify-center items-center gap-10   "}>
           <div className={" w-full text-2xl font-bold flex flex-col text-center items-center font-Pacifico"}>
               <h1 className={"text-white p-5"}>LIVE WEATHER</h1>
               <input type={"text"} placeholder={"Search..."} className={" w-5/6 rounded-xl px-4  border border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-[15px] text-[15px] lg:w-4/6  xl:w-3/6"}/>
           </div>

       </div>
    );
}

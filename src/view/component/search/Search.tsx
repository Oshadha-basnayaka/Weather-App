import searchicon from '../../../assetes/icon/icons8-search-50.png';



export function Search() {
    return (
       <div className={"flex flex-col pt-5 w-full p-5 items-center gap-5"}>
           <div className={"font-italianno w-full"}>LIVE wheather  </div>
           <input type={"text"} placeholder={"Search..."} className={"h-8 w-full  rounded-2xl"}/>
       </div>
    );
}

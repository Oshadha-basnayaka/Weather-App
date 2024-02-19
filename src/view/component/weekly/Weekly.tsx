import cloud from '../../../assetes/icon/icons8-cloud-50.png';
export function Weekly() {
    return (
       <div className={"w-full flex flex-col justify-around items-center "}>

           <div className={"flex flex-1 w-full justify-center h-screen"}>
               <div className={"gap-5 flex flex-col w-[50%]"}>
                   <h1>Sunday</h1>
                   <div className={"flex gap-3 w-[50%]"}>
                       <img src={cloud} alt=""/>
                       <h1>Overcast cloud</h1>
                   </div>
               </div>

               <div className={""}>
                   <div className={"flex"}>
                       <img src={cloud} alt=""/>
                       <h1>27c</h1>
                   </div>

                   <div className={"flex"}>
                       <img src={cloud} alt=""/>
                       <h1>27c</h1>
                   </div>
               </div>


               <div className={""}>
                   <div className={"flex"}>
                       <img src={cloud} alt=""/>
                       <h1>27c</h1>
                   </div>

                   <div className={"flex"}>
                       <img src={cloud} alt=""/>
                       <h1>27c</h1>
                   </div>
               </div>


           </div>

       </div>
    );
}

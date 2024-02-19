import cloud from '../../../assetes/icon/white/icons8-cloud-50 (1).png';
import humidity from '../../../assetes/icon/white/icons8-humidity-50.png';
import wind from '../../../assetes/icon/white/icons8-wind-50 (1).png';
import temperature from '../../../assetes/icon/white/icons8-temperature-50.png';
export function Weekly() {
    return (
       <div className={"w-full flex flex-col justify-center items-center  "}>

           <div className="flex w-full  ">

               <div className="gap-3 flex-1 flex flex-col items-start text-center  ">
                   <h1 className="text-sm font-bold ">Sunday</h1>
                   <div className="flex items-center gap-3">
                       <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                       <h1 className="text-sm">Overcast Cloud</h1>
                   </div>
               </div>

               <div className="flex-1 flex flex-col items-center text-center  ">
                   <div className="flex items-center h-full gap-5">
                       <img src={temperature} alt="Temperature" className="h-[20px] w-[20px] object-cover" />
                       <h1 className="text-sm">27°C</h1>
                   </div>

                   <div className="flex items- gap-5">
                       <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                       <h1 className="text-sm">27%</h1>
                   </div>
               </div>

               <div className="flex-1 flex flex-col items-center text-center">
                   <div className="flex items-center h-full gap-5">
                       <img src={wind} alt="Wind" className="h-[20px] w-[20px] object-cover" />
                       <h1 className="text-sm">27m/s</h1>
                   </div>

                   <div className="flex items-center gap-5">
                       <img src={humidity} alt="Humidity" className="h-[20px] w-[20px] object-cover" />
                       <h1 className="text-sm">27%</h1>
                   </div>
               </div>

           </div>


       </div>
    );
}

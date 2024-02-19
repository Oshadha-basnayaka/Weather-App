import cloud from '../../../assetes/icon/white/icons8-cloud-50 (1).png';
import humidity from '../../../assetes/icon/white/icons8-humidity-50.png';
import wind from '../../../assetes/icon/white/icons8-wind-50 (1).png';
import temperature from '../../../assetes/icon/white/icons8-temperature-50.png';
export function Weekly() {
    return (
        <div className={"w-full flex flex-col  gap-2  justify-center items-center "}>

            <div className="flex w-full  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row border rounded-2xl p-2">

                <div className="gap-3 flex-1 flex flex-col items-start text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <h1 className="text-sm font-bold ">Sunday</h1>
                    <div className="flex items-center gap-3">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">Overcast Cloud</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center ">
                    <div className="flex items-center h-full gap-5">
                        <img src={temperature} alt="Temperature" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">27°C</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">36%</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <div className="flex items-center h-full gap-5">
                        <img src={wind} alt="Wind" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">1.27m/s</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={humidity} alt="Humidity" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">81%</h1>
                    </div>
                </div>

            </div>

            <div className="flex w-full  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row border rounded-2xl p-2">

                <div className="gap-3 flex-1 flex flex-col items-start text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <h1 className="text-sm font-bold ">Monday</h1>
                    <div className="flex items-center gap-3">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">Overcast Cloud</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center ">
                    <div className="flex items-center h-full gap-5">
                        <img src={temperature} alt="Temperature" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">26°C</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">18%</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <div className="flex items-center h-full gap-5">
                        <img src={wind} alt="Wind" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">1.67m/s</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={humidity} alt="Humidity" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">76%</h1>
                    </div>
                </div>

            </div>

            <div className="flex w-full  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row border rounded-2xl p-2">

                <div className="gap-3 flex-1 flex flex-col items-start text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <h1 className="text-sm font-bold ">Thuesday</h1>
                    <div className="flex items-center gap-3">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">Overcast Cloud</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center ">
                    <div className="flex items-center h-full gap-5">
                        <img src={temperature} alt="Temperature" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">28°C</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">14%</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <div className="flex items-center h-full gap-5">
                        <img src={wind} alt="Wind" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">1.99m/s</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={humidity} alt="Humidity" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">76%</h1>
                    </div>
                </div>

            </div>

            <div className="flex w-full  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row border rounded-2xl p-2">

                <div className="gap-3 flex-1 flex flex-col items-start text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <h1 className="text-sm font-bold ">Wednessday</h1>
                    <div className="flex items-center gap-3">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">Overcast Cloud</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center ">
                    <div className="flex items-center h-full gap-5">
                        <img src={temperature} alt="Temperature" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">26°C</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">67%</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <div className="flex items-center h-full gap-5">
                        <img src={wind} alt="Wind" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">1.27m/s</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={humidity} alt="Humidity" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">74%</h1>
                    </div>
                </div>

            </div>

            <div className="flex w-full  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row border rounded-2xl p-2">

                <div className="gap-3 flex-1 flex flex-col items-start text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <h1 className="text-sm font-bold ">Friday</h1>
                    <div className="flex items-center gap-3">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">Overcast Cloud</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center ">
                    <div className="flex items-center h-full gap-5">
                        <img src={temperature} alt="Temperature" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">27°C</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">27%</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
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

            <div className="flex w-full  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row border rounded-2xl p-2 ">

                <div className="gap-3 flex-1 flex flex-col items-start text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <h1 className="text-sm font-bold ">Saterday</h1>
                    <div className="flex items-center gap-3">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">Overcast Cloud</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center ">
                    <div className="flex items-center h-full gap-5">
                        <img src={temperature} alt="Temperature" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">27°C</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={cloud} alt="Cloud" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">58%</h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                    <div className="flex items-center h-full gap-5">
                        <img src={wind} alt="Wind" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">2.57m/s</h1>
                    </div>

                    <div className="flex items-center gap-5">
                        <img src={humidity} alt="Humidity" className="h-[20px] w-[20px] object-cover" />
                        <h1 className="text-sm">69%</h1>
                    </div>
                </div>

            </div>

        </div>


    );
}

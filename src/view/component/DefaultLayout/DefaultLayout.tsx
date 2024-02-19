import {Search} from "../search/Search";
import {Current} from "../Current/Current";
import {Weekly} from "../weekly/Weekly";

export function DefaultLayout() {
    return (
        <div className={"bg-gradient-to-r from-blue-950 to-blue-700 w-full  p-5 min-h-screen justify-center flex flex-col"}>
            <Search/>


            <div className={" rounded-3xl bg-gradient-to-r w-full from-blue-600 to-blue-800 gap-5 flex flex-col min-h-full text-white lg:flex-row lg:gap-5 lg:p-5"}>



                <div className={"border-2 rounded-3xl bg-gradient-to-r w-full from-blue-600 to-blue-800 flex   p-5  text-white lg:w-[50%]"}>
                    <Current/>
                </div>

                <div className={"  border-2 rounded-3xl bg-gradient-to-r w-full from-blue-600 to-blue-800 flex   p-5  text-white lg:w-[50%]"}>
                    <Weekly/>
                </div>
            </div>


        </div>
    );
}

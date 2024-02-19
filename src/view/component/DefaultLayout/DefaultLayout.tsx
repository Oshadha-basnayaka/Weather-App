import {Search} from "../search/Search";
import {Current} from "../Current/Current";
import {Weekly} from "../weekly/Weekly";

export function DefaultLayout() {
    return (
        <div className={"bg-gradient-to-r from-blue-950 to-blue-800 w-full  p-10 min-h-screen  flex flex-col"}>
          <div>
              <Search/>
          </div>
            <div className={"rounded-3xl bg-blue-500 gap-3 flex flex-col min-h-full text-white lg:flex-row lg:gap-5 lg:p-5 lg:h-full shadow bg-opacity-20"}>

                <div className={"border-2 rounded-3xl bg-gradient-to-r w-full from-blue-600 to-blue-800 flex p-5 text-white lg:w-[50%] lg:h-full "}>
                    <Current/>
                </div>

                <div className={"border-2 rounded-3xl bg-gradient-to-r w-full from-blue-600 to-blue-800 flex p-5 text-white lg:w-[50%] lg:h-full"}>
                    <Weekly/>
                </div>
            </div>


        </div>
    );
}

import {Search} from "../search/Search";
import {Current} from "../Current/Current";
import {Weekly} from "../weekly/Weekly";

export function DefaultLayout() {
    return (
        <div className={"bg-gradient-to-r from-cyan-500 to-blue-500 w-full  p-5 h-screen  justify-center flex"}>

            <div className={"  border rounded-3xl bg-gradient-to-r w-full from-white to-blue-500 flex flex-col h-screen "}>
                <Search/>
                <Current/>

                <div className={"border rounded-3xl bg-gradient-to-r w-full from-white to-blue-500 flex flex-col mt-5 p-5"}>
                    <Weekly/>
                </div>
            </div>


        </div>
    );
}
